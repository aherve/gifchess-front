import {Component} from '@angular/core';
import {AnalyticsService} from 'src/app/analytics.service';
import {ApiService} from 'src/app/api.service';
import {LichessFormEvent} from 'src/app/components/lichess-form/lichess-form.component';

@Component({
  selector: 'ah-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public content = 'Turn you lichess games into animated gifs'
  public isLoading = false
  public isError = false
  public result: any

  constructor(
    private analytics: AnalyticsService,
    private apiService: ApiService,
  ) {}

  public onLichessSubmit(evt: LichessFormEvent) {
    this.isLoading = true
    this.analytics.trackEvent({
      eventCategory: 'lichess',
      eventAction: 'loadGIF',
      eventLabel: `${evt.originalQuery}?reversed=${evt.reversed}`,
    })

    this.apiService.getGifFromLichess(evt.gameID, evt.reversed).then(
      success => {
        this.isLoading = false
        this.result = success
        this.isError = false
      },
      () => {
        this.result = null
        this.isLoading = false
        this.isError = true
      }
    )
  }

}

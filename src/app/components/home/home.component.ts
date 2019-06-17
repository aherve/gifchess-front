import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser'
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AnalyticsService} from 'src/app/analytics.service';
import {ApiService} from 'src/app/api.service';

@Component({
  selector: 'ah-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public content = 'Turn you lichess games into animated gifs'
  public isLoading = false
  public isError = false
  public form: FormGroup
  public result: any

  constructor(
    private fb: FormBuilder,
    private analytics: AnalyticsService,
    private apiService: ApiService,
  ) {}

  public ngOnInit() {
    this.form = this.fb.group({
      lichessID: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  public submit() {
    if (!this.form.valid) {return }
    this.isLoading = true
    this.analytics.trackEvent({
      eventCategory: 'lichess',
      eventAction: 'loadGIF',
      eventLabel: this.form.value.lichessID,
    })
    const strip = this.form.value.lichessID
      .replace('http://', '')
      .replace('https://', '')
      .replace('lichess.org', '')
      .replace('/', '')

    this.apiService.getGifFromLichess(strip).then(
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

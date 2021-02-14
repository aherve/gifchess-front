import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

export interface LichessFormEvent {
  gameID: string
  originalQuery: string
  reversed: boolean
}

@Component({
  selector: 'ah-lichess-form',
  templateUrl: './lichess-form.component.html',
  styleUrls: ['./lichess-form.component.scss']
})
export class LichessFormComponent implements OnInit {
  @Output() public formEmit = new EventEmitter<LichessFormEvent>()
  public form: FormGroup

  constructor(
    private fb: FormBuilder,
  ) {}

  public ngOnInit() {
    this.form = this.fb.group({
      lichessID: ['', [Validators.required, Validators.minLength(8)]],
      reversed: false,
    })
  }

  public submit() {
    if (!this.form.valid) {return }
    const strip = this.form.value.lichessID
      .replace('http://', '')
      .replace('https://', '')
      .replace('lichess.org', '')
      .replace('/', '')
    this.formEmit.emit({
      gameID: strip,
      originalQuery: this.form.value.lichessID,
      reversed: this.form.value.reversed,
    })
  }

}

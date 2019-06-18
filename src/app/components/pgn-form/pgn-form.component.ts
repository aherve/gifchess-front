import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

export interface PGNFormEvent {
  pgn: string
  reversed: boolean
}

@Component({
  selector: 'ah-pgn-form',
  templateUrl: './pgn-form.component.html',
  styleUrls: ['./pgn-form.component.scss']
})
export class PgnFormComponent implements OnInit {
  @Output() public formEmit = new EventEmitter<PGNFormEvent>()
  public form: FormGroup

  constructor(
    private fb: FormBuilder,
  ) {}

  public ngOnInit() {
    this.form = this.fb.group({
      pgn: ['', [Validators.required, Validators.minLength(1)]],
      reversed: false,
    })
  }

  public submit() {
    if (!this.form.valid) {return }
    this.formEmit.emit(this.form.value)
  }

}

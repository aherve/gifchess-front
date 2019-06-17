import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatCheckboxModule
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ]
})
export class MaterialModule {}

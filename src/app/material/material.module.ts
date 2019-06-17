import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatChipsModule,
  MatProgressSpinnerModule
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
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

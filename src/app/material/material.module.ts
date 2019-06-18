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
  MatCheckboxModule,
  MatTabsModule
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
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
    MatTabsModule,
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

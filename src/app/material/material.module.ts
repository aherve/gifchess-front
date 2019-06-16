import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ]
})
export class MaterialModule {}

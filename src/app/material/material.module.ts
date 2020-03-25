import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule
  ],
  exports: [
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule
  ]
})
export class MaterialModule { }

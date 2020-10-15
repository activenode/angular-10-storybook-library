import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatternLibComponent } from './pattern-lib.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [PatternLibComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [PatternLibComponent, ButtonComponent]
})
export class PatternLibModule { }

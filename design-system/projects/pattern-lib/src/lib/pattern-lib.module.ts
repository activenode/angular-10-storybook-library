import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatternLibComponent } from './pattern-lib.component';
import { ButtonComponent } from './button/button.component';
import { ButtonsetComponent } from './buttonset/buttonset.component';


@NgModule({
  declarations: [PatternLibComponent, ButtonComponent, ButtonsetComponent],
  imports: [
    CommonModule
  ],
  exports: [PatternLibComponent, ButtonComponent, ButtonsetComponent]
})
export class PatternLibModule { }

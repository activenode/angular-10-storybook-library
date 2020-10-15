import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string | null;
  @Input('pink') pink: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

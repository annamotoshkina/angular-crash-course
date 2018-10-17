import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title: string;
  isCollapsed: boolean = true;

  onClick() {
    this.isCollapsed = !this.isCollapsed;
  }
}

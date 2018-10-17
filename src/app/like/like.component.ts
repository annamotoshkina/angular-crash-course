import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('is-active') isActive: boolean;
  @Input('likes-count') likesCount: number;

  onClick() {
    if (this.isActive) {
      this.likesCount--;
    } else {
      this.likesCount++;
    }

    this.isActive = !this.isActive;  
  }
}

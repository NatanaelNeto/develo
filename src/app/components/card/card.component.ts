import { Component, Input } from '@angular/core';
import { Shadow } from '../Shadow';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  @Input() isRounded: Boolean = false;
  @Input() shadow: Shadow = 'none';

  shadowStyle(): string {
    if (this.shadow === 'none') return '';
    return this.shadow === 'shaded'
      ? 'shaded'
      : 'shaded-strong';
  }
}

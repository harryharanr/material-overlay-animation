import { Component, HostBinding } from '@angular/core';
import { routeSlideStateTrigger } from './animation';

@Component({
  selector: 'app-topsheet-overlay',
  templateUrl: './topsheet-overlay.component.html',
  styleUrls: ['./topsheet-overlay.component.scss'],
  animations: [routeSlideStateTrigger]
})
export class TopsheetOverlayComponent {
  @HostBinding("@routeSlideState") overlayAnimation = true;
  constructor() { }
}

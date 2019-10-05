import { Component } from '@angular/core';
import { TopsheetOverlayService } from './shared/custom-overlays/topsheet-overlay/topsheet-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  files = [
    { name: 'image_1.jpg', path: '' },
    { name: 'image_2.jpg', path: '' },
    { name: 'image_3.jpg', path: '' },
    { name: 'image_4.jpg', path: '' },
    { name: 'image_5.jpg', path: '' }
  ];

  constructor(private topsheetOverlayService: TopsheetOverlayService) { }

  showPreview() {
    this.topsheetOverlayService.open();
  }
}

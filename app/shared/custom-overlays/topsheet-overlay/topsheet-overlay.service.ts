import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TopsheetOverlayComponent } from './topsheet-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class TopsheetOverlayService {

  constructor(private overlay: Overlay) { }

  open() {
    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.overlay.create();

    // Create ComponentPortal that can be attached to a PortalHost
    const filePreviewPortal = new ComponentPortal(TopsheetOverlayComponent);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(filePreviewPortal);
  }
}

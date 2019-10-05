import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopsheetOverlayComponent } from './custom-overlays/topsheet-overlay/topsheet-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [TopsheetOverlayComponent],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    TopsheetOverlayComponent
  ],
  entryComponents: [
    TopsheetOverlayComponent
  ]
})
export class SharedModule { }

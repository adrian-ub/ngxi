import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfacePageControllerFitScreenFitScreenAdjustDisplayArtboardFrameCornerIcon],svg[streamline-interface-page-controller-fit-screen-fit-screen-adjust-display-artboard-frame-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 .5H1a.5.5 0 0 0-.5.5v4m13 0V1a.5.5 0 0 0-.5-.5H9m0 13h4a.5.5 0 0 0 .5-.5V9M.5 9v4a.5.5 0 0 0 .5.5h4"></svg:path>`,
})
export class StreamlineInterfacePageControllerFitScreenFitScreenAdjustDisplayArtboardFrameCornerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

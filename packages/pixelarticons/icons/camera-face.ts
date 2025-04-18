import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCameraFaceIcon],svg[pixelarticons-camera-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h10v2h5v16H2V7h2v12h16V7h-5V5H9v2H2V5h5zm7 12h-4v2h4zm-4-2v2H8v-2zm0-2V9H8v2zm6 2v2h-2v-2zm0-2V9h-2v2z"></svg:path>`,
})
export class PixelarticonsCameraFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

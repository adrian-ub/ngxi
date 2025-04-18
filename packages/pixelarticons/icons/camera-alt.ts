import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCameraAltIcon],svg[pixelarticons-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4H2v16h20V4zm16 2v12H4V6zM8 8H6v2h2zm4 0h4v2h-4zm-2 2h2v4h-2zm6 4h2v-4h-2zm0 0h-4v2h4z"></svg:path>`,
})
export class PixelarticonsCameraAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

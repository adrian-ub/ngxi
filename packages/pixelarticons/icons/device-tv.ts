import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeviceTvIcon],svg[pixelarticons-device-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h20V6h-7V4h-2v2h-2V4H9v2H2zM9 4V2H7v2zm6 0h2V2h-2zm5 4v10H4V8z"></svg:path>`,
})
export class PixelarticonsDeviceTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

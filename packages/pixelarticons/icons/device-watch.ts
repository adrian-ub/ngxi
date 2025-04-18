import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeviceWatchIcon],svg[pixelarticons-device-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v4h5v12h-5v4H8v-4H3V6h5zM5 16h14V8H5zm6-6h2v2h2v2h-4z"></svg:path>`,
})
export class PixelarticonsDeviceWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

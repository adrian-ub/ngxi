import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCameraAddIcon],svg[pixelarticons-camera-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2H3v3H0v2h3v3h2V7h3V5H5zm12 1h-7v2h5v2h5v12H5v-7H3v9h19V5h-5zm-7 6h4v2h2v4h-2v2h-4v-2h4v-4h-4zm-2 2h2v4H8z"></svg:path>`,
})
export class PixelarticonsCameraAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

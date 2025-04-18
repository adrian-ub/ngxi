import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCameraIcon],svg[pixelarticons-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3H7v2H2v16h20V5h-5V3zm8 4h3v12H4V7h5V5h6v2zm-7 2h4v2h-4zm4 6h-4v2h4zh2v-4h-2zm-6-4h2v4H8z"></svg:path>`,
})
export class PixelarticonsCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

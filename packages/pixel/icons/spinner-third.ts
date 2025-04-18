import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSpinnerThirdIcon],svg[pixel-spinner-third-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-2v-2h1V9h-1V7h-1V5h-2V4h-2V3h-3V1h3v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelSpinnerThirdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSpinnerThirdSolidIcon],svg[pixel-spinner-third-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-3v-2h1V9h-1V7h-1V6h-1V5h-2V4h-2V3h-1V1h3v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelSpinnerThirdSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

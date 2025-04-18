import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFlagIcon],svg[pixel-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v1h-2v1h-6V5H6v1H5V5h1V3H5V2H3v1H2v2h1v17h2v-4h1v-1h7v1h6v-1h2v-1h1V4zm-1 11h-1v1h-6v-1H6v1H5V8h1V7h7v1h6V7h1z"></svg:path>`,
})
export class PixelFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

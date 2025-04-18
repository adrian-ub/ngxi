import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBrightnessHighSolidIcon],svg[pixel-brightness-high-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h5v2H1zm3-6H3V4h1V3h1v1h1v1h1v1h1v1H7v1H6V7H5V6H4zm3 12h1v1H7v1H6v1H5v1H4v-1H3v-1h1v-1h1v-1h1v-1h1zm4 1h2v5h-2zm0-17h2v5h-2zm9 18h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h1v-1h1v1h1v1h1zm-2-8h5v2h-5zm-1-4h-1V6h1V5h1V4h1V3h1v1h1v1h-1v1h-1v1h-1v1h-1zm-1 9h-2v1h-4v-1H8v-2H7v-4h1V8h2V7h4v1h2v2h1v4h-1z"></svg:path>`,
})
export class PixelBrightnessHighSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

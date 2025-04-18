import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelGoogleIcon],svg[pixel-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10v5h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v2h-1v1h-1v1h-2V6H9v1H7v2H6v6h1v2h2v1h6v-1h2v-2h1v-1h-6v-4z"></svg:path>`,
})
export class PixelGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

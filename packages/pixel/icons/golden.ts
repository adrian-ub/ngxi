import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelGoldenIcon],svg[pixel-golden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9h1v1H6z"></svg:path><svg:path fill="currentColor" d="M23 9v6h-1v1h-1v2h-1v1h-1v1h-1v1h-2v1h-2v1h-4v-1H8v-1H6v-1H5v-1H4v-8h1v2h1v2h1v1h2v1h5v-1h2v-1h1v-1h1v-2h1v-1h1V5h1v2h1v2z"></svg:path><svg:path fill="currentColor" d="M5 10h1v1H5zm11 1h1v1h-1z"></svg:path><svg:path fill="currentColor" d="M4 10H3v7H2v-3H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h1v1h1v6h-1v1h-1V8h-2V7H7v1H5v1H4z"></svg:path>`,
})
export class PixelGoldenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

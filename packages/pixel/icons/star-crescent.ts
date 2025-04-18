import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelStarCrescentIcon],svg[pixel-star-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10v1h-1v1h-1v2h1v3h-1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v1h-1v-3h1v-2h-1v-1h-1v-1h3V8h1V7h1v1h1v2z"></svg:path><svg:path fill="currentColor" d="M8 10V8h1V6h1V5h2V4h2V3h3V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h-3v-1h-2v-1h-2v-1H9v-2H8v-2H7v-4zm-2 4v2h1v2h1v1h1v1h1v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h1v1H9v1H8v1H7v2H6v2H5v4z"></svg:path>`,
})
export class PixelStarCrescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

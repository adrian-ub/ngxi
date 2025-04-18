import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelStarCrescentSolidIcon],svg[pixel-star-crescent-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21h3v1h-2v1H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h-3v1h-2v1h-2v1H9v2H8v2H7v4h1v2h1v2h1v1h2v1h2z"></svg:path><svg:path fill="currentColor" d="M23 10v1h-1v1h-1v2h1v3h-1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v1h-1v-3h1v-2h-1v-1h-1v-1h3V8h1V7h1v1h1v2z"></svg:path>`,
})
export class PixelStarCrescentSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

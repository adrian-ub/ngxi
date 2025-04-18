import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelStarSolidIcon],svg[pixel-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8v2h-1v1h-1v1h-1v1h-1v1h-1v5h1v4h-2v-1h-2v-1h-2v-1h-2v1H9v1H7v1H5v-4h1v-5H5v-1H4v-1H3v-1H2v-1H1V8h7V6h1V4h1V2h1V1h2v1h1v2h1v2h1v2z"></svg:path>`,
})
export class PixelStarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

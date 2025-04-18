import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelQuoteLeftSolidIcon],svg[pixel-quote-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h1v8h-1v1H2v-1H1V7h1V5h1V4h1V3h2V2h2v1h1v3H8v1H6v1H5v4h5zm13 0v8h-1v1h-8v-1h-1V7h1V5h1V4h1V3h2V2h2v1h1v3h-1v1h-2v1h-1v4h5v1z"></svg:path>`,
})
export class PixelQuoteLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

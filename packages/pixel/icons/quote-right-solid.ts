import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelQuoteRightSolidIcon],svg[pixel-quote-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h1v14h-1v2H9v1H8v1H6v1H4v-1H3v-3h1v-1h2v-1h1v-4H2v-1H1V3h1V2h8zm13 0v14h-1v2h-1v1h-1v1h-2v1h-2v-1h-1v-3h1v-1h2v-1h1v-4h-5v-1h-1V3h1V2h8v1z"></svg:path>`,
})
export class PixelQuoteRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

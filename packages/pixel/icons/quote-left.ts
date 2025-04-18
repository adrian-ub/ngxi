import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelQuoteLeftIcon],svg[pixel-quote-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v-1h-5V8h1V7h2V6h1V3h-1V2h-2v1h-2v1h-1v1h-1v2h-1v14h1v1h8v-1h1v-8zm-7 0h1v1h5v6h-6zm-5 0v-1H5V8h1V7h2V6h1V3H8V2H6v1H4v1H3v1H2v2H1v14h1v1h8v-1h1v-8zm-7 0h1v1h5v6H3z"></svg:path>`,
})
export class PixelQuoteLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

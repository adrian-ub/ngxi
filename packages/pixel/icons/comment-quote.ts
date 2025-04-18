import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCommentQuoteIcon],svg[pixel-comment-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v8h-1v1h-3v-1h1v-1h1v-2h-2V7zm-6 0v8h-1v1H7v-1h1v-1h1v-2H7V7z"></svg:path><svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-2V3h-3V2H9v1H6v1H4v1H3v1H2v2H1v6h1v2h1v2H2v1H1v2h5v-1h1v-1h2v1h6v-1h3v-1h2v-1h1v-1h1v-2h1V8zm-2 6v2h-2v1h-3v1H9v-1H7v1H6v1H4v-1h1v-2H4v-2H3V8h1V6h2V5h3V4h6v1h3v1h2v2h1v6z"></svg:path>`,
})
export class PixelCommentQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

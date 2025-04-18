import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCommentDotsIcon],svg[pixel-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10v2h-1v1h-2v-1h-1v-2h1V9h2v1zm-5 0v2h-1v1h-2v-1h-1v-2h1V9h2v1zm-5 0v2H8v1H6v-1H5v-2h1V9h2v1z"></svg:path><svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-2V3h-3V2H9v1H6v1H4v1H3v1H2v2H1v6h1v2h1v2H2v1H1v2h5v-1h1v-1h2v1h6v-1h3v-1h2v-1h1v-1h1v-2h1V8zm-1 6h-1v2h-2v1h-3v1H9v-1H7v1H6v1H4v-1h1v-2H4v-2H3V8h1V6h2V5h3V4h6v1h3v1h2v2h1z"></svg:path>`,
})
export class PixelCommentDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

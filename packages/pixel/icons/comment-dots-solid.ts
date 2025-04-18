import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCommentDotsSolidIcon],svg[pixel-comment-dots-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-2V3h-3V2H9v1H6v1H4v1H3v1H2v2H1v6h1v2h1v2H2v1H1v2h5v-1h1v-1h2v1h6v-1h3v-1h2v-1h1v-1h1v-2h1V8zm-6 5v-1h-1v-2h1V9h2v1h1v2h-1v1zm-6-1v-2h1V9h2v1h1v2h-1v1h-2v-1zM8 9v1h1v2H8v1H6v-1H5v-2h1V9z"></svg:path>`,
})
export class PixelCommentDotsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

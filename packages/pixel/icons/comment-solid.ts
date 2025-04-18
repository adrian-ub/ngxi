import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCommentSolidIcon],svg[pixel-comment-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8v6h-1v2h-1v1h-1v1h-2v1h-3v1H9v-1H7v1H6v1H1v-2h1v-1h1v-2H2v-2H1V8h1V6h1V5h1V4h2V3h3V2h6v1h3v1h2v1h1v1h1v2z"></svg:path>`,
})
export class PixelCommentSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

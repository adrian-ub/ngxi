import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCommentsSolidIcon],svg[pixel-comments-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16v1H4v1H1v-4h1v-2H1V7h1V5h2V4h2V3h5v1h2v1h2v2h1v5h-1v2h-2v1h-2v1z"></svg:path><svg:path fill="currentColor" d="M23 11v5h-1v2h1v4h-3v-1h-1v-1h-6v-1h-2v-1H9v-1h3v-1h2v-1h2v-2h1V7h1v1h2v1h2v2z"></svg:path>`,
})
export class PixelCommentsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

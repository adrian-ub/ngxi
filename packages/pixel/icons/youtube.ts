import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelYoutubeIcon],svg[pixel-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7V5h-2V4H4v1H2v2H1v10h1v2h2v1h16v-1h2v-2h1V7zm-10 8h-2V9h2v1h2v1h2v2h-2v1h-2z"></svg:path>`,
})
export class PixelYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

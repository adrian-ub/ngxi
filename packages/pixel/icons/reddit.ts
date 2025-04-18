import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelRedditIcon],svg[pixel-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15h1v1h-1zm-1-3h2v2h-2zm-4 0h2v2H9zm0 3h1v1H9z"></svg:path><svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-3 5h-1v1h-1v2h-1v1h-2v1h-4v-1H8v-1H7v-3H6v-1H5v-2h1v-1h2v1h1v-1h3V5h2v1h3v2h-2V7h-2v3h2v1h1v-1h2v1h1z"></svg:path><svg:path fill="currentColor" d="M10 16h4v1h-4z"></svg:path>`,
})
export class PixelRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

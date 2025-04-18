import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTwitterIcon],svg[pixel-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5h1v1h-1zm0-2h1v1h-1zm-1 2v1h1v1h-1v5h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-3v1H4v-1H2v-1H1v-1h2v1h3v-1h1v-1H5v-1H4v-1H3v-1h2v-1H3v-1H2v-2h2V9H3V8H2V4h1v1h1v1h1v1h2v1h3v1h2V5h1V4h1V3h5v1h3v1z"></svg:path>`,
})
export class PixelTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

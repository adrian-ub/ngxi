import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFacebookRoundIcon],svg[pixel-facebook-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1h-1v-8h2v-1h1v-2h-3V9h1V8h2V5h-4v1h-2v2h-1v4H7v3h3v8H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"></svg:path>`,
})
export class PixelFacebookRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelAppleIcon],svg[pixel-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v3h-1v1h-1v1h-2V3h1V2h1V1zm6 16v1h-1v2h-1v1h-1v1h-1v1h-2v-1h-5v1H8v-1H7v-1H6v-1H5v-1H4v-2H3v-7h1V8h1V7h2V6h3v1h4V6h3v1h2v1h1v1h-1v1h-1v5h1v1h1v1z"></svg:path>`,
})
export class PixelAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

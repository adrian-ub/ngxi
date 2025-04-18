import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTiktokIcon],svg[pixel-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7v4h-2v-1h-2V9h-1v10h-1v1h-1v1h-1v1h-1v1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-4h1v-2h1v-1h1v-1h1V9h4v4H8v1H7v3h1v1h3v-1h1V1h4v1h1v2h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

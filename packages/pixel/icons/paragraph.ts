import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelParagraphIcon],svg[pixel-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v1H5v1H4v1H3v2H2v6h1v2h1v1h1v1h2v1h4v6h2V3h3v20h2V3h4V1zm4 14H7v-1H5v-2H4V6h1V4h2V3h4z"></svg:path>`,
})
export class PixelParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelParagraphSolidIcon],svg[pixel-paragraph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1v3h-3v19h-3V4h-2v19h-3v-6H7v-1H5v-1H4v-1H3v-2H2V6h1V4h1V3h1V2h2V1z"></svg:path>`,
})
export class PixelParagraphSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

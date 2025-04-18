import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSmartphoneIcon],svg[si-glyph-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.001 0H5C3.897 0 3.003 0 3.003 1v14c0 1.119.895.947 1.997.947h5.001c1.103 0 1.999.172 1.999-.947V1c0-1-.896-1-1.999-1M8.125 15.188h-1.23v-1.375h1.23zM11.037 13H4V1h7.037z"></svg:path>`,
})
export class SiGlyphSmartphoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

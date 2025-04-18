import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBarcodeIcon],svg[si-glyph-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2h1.953v10.914H14zm-3 0h1.967v10.914H11zM9 2h.95v10.914H9zM5 2h1.972v10.914H5zM3 2h.973v10.914H3zM1 2h.973v10.914H1z"></svg:path>`,
})
export class SiGlyphBarcodeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

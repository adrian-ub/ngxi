import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPenNibIcon],svg[si-glyph-pen-nib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.723.04l-.785 1.843l4.25 4.25l1.83-.773zM3.357 6.132s.94 4.213-3.294 8.447l.302.302l6.764-6.764a1.5 1.5 0 0 1-.145-.633a1.5 1.5 0 1 1 1.5 1.5c-.235 0-.455-.059-.654-.156l-6.758 6.76l.389.389c4.249-4.248 8.463-3.292 8.463-3.292l2.758-6.054l-3.295-3.295z"></svg:path>`,
})
export class SiGlyphPenNibIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

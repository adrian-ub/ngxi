import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDialNumber1Icon],svg[si-glyph-dial-number-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:circle cx="2" cy="3" r="2"></svg:circle><svg:circle cx="7" cy="3" r="2"></svg:circle><svg:circle cx="13" cy="2" r="2"></svg:circle><svg:circle cx="2" cy="8" r="2"></svg:circle><svg:circle cx="7" cy="8" r="2"></svg:circle><svg:circle cx="12" cy="8" r="2"></svg:circle><svg:circle cx="2" cy="13" r="2"></svg:circle><svg:circle cx="7" cy="13" r="2"></svg:circle><svg:circle cx="12" cy="13" r="2"></svg:circle></svg:g>`,
})
export class SiGlyphDialNumber1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationDeleteIcon],svg[si-glyph-pin-location-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.475.031c-3.007 0-5.443 2.512-5.443 5.609c0 1.584 5.443 10.275 5.443 10.275s5.441-8.609 5.441-10.275c0-3.097-2.437-5.609-5.441-5.609m3.474 7.867L9.914 8.932L7.5 6.518L5.086 8.932L4.051 7.898l2.414-2.414L4.051 3.07l1.035-1.035L7.5 4.449l2.414-2.414l1.035 1.035l-2.415 2.414z"></svg:path>`,
})
export class SiGlyphPinLocationDeleteIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

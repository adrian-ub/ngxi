import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickRightIcon],svg[si-glyph-arrow-thick-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.818 7.646l-5.94-5.44a.64.64 0 0 0-.849.002l-.005 3.793H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8.019l-.006 3.877a.64.64 0 0 0 .849-.003l5.954-5.452a.518.518 0 0 0 .002-.777"></svg:path>`,
})
export class SiGlyphArrowThickRightIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowLeftRightIcon],svg[si-glyph-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 9h8.066v2.864l3.85-3.82l-3.85-4.013L13 7H5l-.114-2.97L1.03 8.07l3.856 3.866z"></svg:path>`,
})
export class SiGlyphArrowLeftRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

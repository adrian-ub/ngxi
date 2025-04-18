import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickDownIcon],svg[si-glyph-arrow-thick-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.327 15.886l5.447-5.94a.65.65 0 0 0-.002-.849l-3.841-.005V1.068c0-.553-.437-1-.976-1H7.004a.987.987 0 0 0-.976 1v8.02l-3.95-.005a.65.65 0 0 0 .004.848l5.485 5.954a.5.5 0 0 0 .76.001"></svg:path>`,
})
export class SiGlyphArrowThickDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

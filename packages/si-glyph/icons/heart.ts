import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeartIcon],svg[si-glyph-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.958 1.03a4.015 4.015 0 0 0-3.911 3.148A4.054 4.054 0 0 0 5.102 1.03c-2.237 0-4.05 1.824-4.05 4.072c0 6.496 8.005 9.838 8.005 9.838s7.912-3.258 7.912-9.879c0-2.228-1.795-4.031-4.011-4.031"></svg:path>`,
})
export class SiGlyphHeartIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

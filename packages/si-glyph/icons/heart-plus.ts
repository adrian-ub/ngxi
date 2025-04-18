import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeartPlusIcon],svg[si-glyph-heart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11 12h4.958v.918H11z"></svg:path><svg:path d="M13 10h.918v4.957H13z"></svg:path><svg:path d="M11.917 8.958h3.055c.605-1.135.997-2.431.997-3.896a4.02 4.02 0 0 0-4.011-4.031a4.015 4.015 0 0 0-3.911 3.148a4.054 4.054 0 0 0-3.945-3.148c-2.237 0-4.05 1.824-4.05 4.072c0 6.496 8.005 9.838 8.005 9.838s.785-.324 1.86-.974v-3.05h2z"></svg:path></svg:g>`,
})
export class SiGlyphHeartPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

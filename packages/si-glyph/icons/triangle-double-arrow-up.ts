import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleDoubleArrowUpIcon],svg[si-glyph-triangle-double-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.446 6.773c.581.581.9 2.103-1.001 2.103H1.457c-1.839 0-1.582-1.521-1-2.103L6.898.329a1.49 1.49 0 0 1 2.104 0z"></svg:path><svg:path d="M15.446 13.773c.581.581.9 2.103-1.001 2.103H1.457c-1.839 0-1.582-1.521-1-2.103l6.441-6.444a1.49 1.49 0 0 1 2.104 0z"></svg:path></svg:g>`,
})
export class SiGlyphTriangleDoubleArrowUpIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

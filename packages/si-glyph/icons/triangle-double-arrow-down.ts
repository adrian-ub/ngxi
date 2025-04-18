import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleDoubleArrowDownIcon],svg[si-glyph-triangle-double-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.044 16.565a1.49 1.49 0 0 1-2.104 0l-6.442-6.444c-.582-.581-.839-2.103 1-2.103h12.988c1.901 0 1.582 1.521 1.001 2.103z"></svg:path><svg:path d="M10.044 9.565a1.49 1.49 0 0 1-2.104 0L1.498 3.121c-.582-.581-.839-2.103 1-2.103h12.988c1.901 0 1.582 1.521 1.001 2.103z"></svg:path></svg:g>`,
})
export class SiGlyphTriangleDoubleArrowDownIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleDownIcon],svg[si-glyph-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.106 12.69a1.49 1.49 0 0 1-2.104 0L1.561 6.246c-.582-.581-.839-2.103 1-2.103h12.988c1.901 0 1.582 1.521 1 2.103z"></svg:path>`,
})
export class SiGlyphTriangleDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

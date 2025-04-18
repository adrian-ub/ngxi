import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleLeftIcon],svg[si-glyph-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.446 10.052a1.49 1.49 0 0 1 0-2.104L9.89 1.506c.581-.582 2.103-.839 2.103 1v12.988c0 1.901-1.521 1.582-2.103 1.001z"></svg:path>`,
})
export class SiGlyphTriangleLeftIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

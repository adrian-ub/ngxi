import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleTriangleRightIcon],svg[si-glyph-circle-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 16a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8M7 4.154c.186-.205.775-.205.96 0l4.9 3.467a.57.57 0 0 1 0 .745l-4.9 3.48c-.185.205-.774.205-.96 0z"></svg:path>`,
})
export class SiGlyphCircleTriangleRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

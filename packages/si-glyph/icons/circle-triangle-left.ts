import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleTriangleLeftIcon],svg[si-glyph-circle-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 0a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m2 11.846c-.186.205-.774.205-.96 0l-4.9-3.467a.563.563 0 0 1 0-.745l4.9-3.48c.185-.205.773-.205.96 0z"></svg:path>`,
})
export class SiGlyphCircleTriangleLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleTriangleDownIcon],svg[si-glyph-circle-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8.041a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-16 0M12.846 6c.205.185.205.772 0 .96l-3.467 4.9a.57.57 0 0 1-.746 0l-3.479-4.9c-.205-.187-.205-.774 0-.96z"></svg:path>`,
})
export class SiGlyphCircleTriangleDownIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiamondIcon],svg[si-glyph-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.93 15.644L3.34 8.796a1.16 1.16 0 0 1-.002-1.641L7.904.323a1.16 1.16 0 0 1 1.642.002l4.54 6.85a1.16 1.16 0 0 1 .004 1.641l-4.518 6.83s-1.187.451-1.642-.002"></svg:path>`,
})
export class SiGlyphDiamondIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

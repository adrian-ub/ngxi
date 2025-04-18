import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowUpIcon],svg[si-glyph-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.812 9.896a1.15 1.15 0 0 1-.65-.197l-6.23-4.156L2.895 9.74a1.175 1.175 0 0 1-1.629-.328a1.173 1.173 0 0 1 .326-1.629L8.28 3.152a1.175 1.175 0 0 1 1.303-.002l6.881 4.59a1.176 1.176 0 0 1-.652 2.156"></svg:path>`,
})
export class SiGlyphArrowUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

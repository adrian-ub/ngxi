import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickLeftIcon],svg[si-glyph-arrow-thick-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m.133 8.367l5.94 5.346a.65.65 0 0 0 .849-.002l.005-3.728h8.024a.99.99 0 0 0 1-.982V7.035a.99.99 0 0 0-1-.982h-8.02l.005-3.81a.65.65 0 0 0-.848.003L.134 7.603a.503.503 0 0 0-.001.764"></svg:path>`,
})
export class SiGlyphArrowThickLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

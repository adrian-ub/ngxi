import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize5Icon],svg[si-glyph-arrow-resize-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.988 0h-4.977a1.01 1.01 0 0 0-1.012 1.009l1.58 1.575l-7.98 7.981L1.029 9C.472 9 .02 9.45.02 10.006v4.946c0 .555.452 1.006 1.009 1.006h4.962c.558 0 1.009-.451 1.009-1.006l-1.582-1.577l7.98-7.98l1.59 1.585A1.01 1.01 0 0 0 16 5.971V1.009A1.01 1.01 0 0 0 14.988 0"></svg:path>`,
})
export class SiGlyphArrowResize5Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

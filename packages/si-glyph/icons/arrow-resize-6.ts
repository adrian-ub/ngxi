import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize6Icon],svg[si-glyph-arrow-resize-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.031 0h4.977A1.01 1.01 0 0 1 7.02 1.009L5.44 2.584l7.98 7.981L14.99 9c.557 0 1.009.45 1.009 1.006v4.946c0 .555-.452 1.006-1.009 1.006h-4.962a1.007 1.007 0 0 1-1.009-1.006l1.582-1.577l-7.98-7.98l-1.59 1.585A1.01 1.01 0 0 1 .019 5.971V1.009A1.01 1.01 0 0 1 1.031 0"></svg:path>`,
})
export class SiGlyphArrowResize6Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

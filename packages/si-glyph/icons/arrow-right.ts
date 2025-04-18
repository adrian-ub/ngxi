import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowRightIcon],svg[si-glyph-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.077 1.162c0 .225.062.45.196.65l4.156 6.229l-4.197 6.037a1.175 1.175 0 0 0 .328 1.629a1.174 1.174 0 0 0 1.63-.325l4.63-6.688c.264-.394.266-.908.002-1.304L8.233.51a1.178 1.178 0 0 0-2.156.652"></svg:path>`,
})
export class SiGlyphArrowRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

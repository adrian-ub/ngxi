import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBook3Icon],svg[si-glyph-book-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.048 13.774l2.014 2.122l8.847-2.065V1.965l-.977-.581l-7.87 2.577l-1.065-1.04l7.7-2.285l-1.148-.625l-7.487 2.122z"></svg:path>`,
})
export class SiGlyphBook3Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

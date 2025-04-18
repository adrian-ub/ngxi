import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonRemoveIcon],svg[si-glyph-button-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.021.114C3.627.114.052 3.668.052 8.036s3.575 7.922 7.969 7.922s7.969-3.554 7.969-7.922S12.415.114 8.021.114M8.013 14.07c-3.329 0-6.04-2.724-6.04-6.071s2.711-6.071 6.04-6.071s6.039 2.725 6.039 6.071c0 3.348-2.71 6.071-6.039 6.071"></svg:path><svg:path d="M4.813 8.982c-.265 0-.782-.298-.782-.986c0-.654.438-.959.732-.959l6.453-.002c.265 0 .783.299.783.987c0 .653-.438.958-.732.958z"></svg:path></svg:g>`,
})
export class SiGlyphButtonRemoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

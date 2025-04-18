import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonPlusIcon],svg[si-glyph-button-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.021.114c-4.394 0-7.969 3.554-7.969 7.922s3.575 7.922 7.969 7.922s7.969-3.554 7.969-7.922S13.415.114 9.021.114M9.013 14.07c-3.329 0-6.04-2.724-6.04-6.071s2.711-6.071 6.04-6.071s6.039 2.725 6.039 6.071c0 3.348-2.71 6.071-6.039 6.071"></svg:path><svg:path d="M8.996 11.969c-.654 0-.959-.437-.959-.731V8.983H5.813c-.265 0-.782-.298-.782-.986c0-.654.438-.959.732-.959h2.271V4.801c0-.264.298-.782.986-.782c.654 0 .959.438.959.732v2.285h2.236c.265 0 .783.299.783.987c0 .653-.438.958-.732.958H9.981v2.206c.001.263-.296.782-.985.782"></svg:path></svg:g>`,
})
export class SiGlyphButtonPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

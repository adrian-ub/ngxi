import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDishIcon],svg[si-glyph-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.979 4.06a3.933 3.933 0 0 0-3.926 3.929a3.933 3.933 0 0 0 3.926 3.931a3.933 3.933 0 0 0 3.926-3.931A3.933 3.933 0 0 0 8.979 4.06"></svg:path><svg:path d="M9.007.072c-4.399 0-7.964 3.562-7.964 7.957a7.96 7.96 0 0 0 7.964 7.96c4.397 0 7.965-3.562 7.965-7.96c0-4.394-3.568-7.957-7.965-7.957m-.028 13.064a5.15 5.15 0 0 1-5.143-5.147a5.15 5.15 0 0 1 5.143-5.146a5.15 5.15 0 0 1 5.143 5.146a5.15 5.15 0 0 1-5.143 5.147"></svg:path></svg:g>`,
})
export class SiGlyphDishIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

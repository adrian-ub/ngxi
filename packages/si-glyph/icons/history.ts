import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHistoryIcon],svg[si-glyph-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.479 1.046c3.859 0 6.819 3.192 7.166 6.985h1.324l-1.892 1.952l-2.065-1.952h1.338c-.33-3.229-2.746-5.958-5.936-5.958c-3.412 0-6.189 2.888-6.189 6.437s2.777 6.438 6.189 6.438c1.695 0 3.231-.713 4.35-1.865l.822.826a7.37 7.37 0 0 1-5.107 2.065c-4.092 0-7.419-3.349-7.419-7.464s3.327-7.464 7.419-7.464"></svg:path><svg:path d="M8.058 4.03L8 8.953L12 9V8l-3.032.062V4.031z"></svg:path></svg:g>`,
})
export class SiGlyphHistoryIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCompassIcon],svg[si-glyph-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.021.035c-4.411 0-8 3.588-8 8c0 4.413 3.588 8 8 8c4.411 0 8-3.587 8-8c0-4.412-3.589-8-8-8M9.001 14A6.006 6.006 0 0 1 3 8c0-3.307 2.692-6 6-6c3.31 0 6 2.693 6 6s-2.69 6-6 6z"></svg:path><svg:path d="m6.042 6.021l2.021 3L12.98 11l-2.979-3.958z"></svg:path></svg:g>`,
})
export class SiGlyphCompassIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

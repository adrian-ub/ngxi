import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphContrastIcon],svg[si-glyph-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.502.115a7.42 7.42 0 1 0 .003 14.839A7.42 7.42 0 0 0 8.502.115m-.584 13.127V1.827c3.477 0 6.292 2.556 6.292 5.707s-2.815 5.708-6.292 5.708"></svg:path>`,
})
export class SiGlyphContrastIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

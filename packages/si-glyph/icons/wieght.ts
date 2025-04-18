import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphWieghtIcon],svg[si-glyph-wieght-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 6.079V5h-1.955v3H4V5.041H2v1.011h-.961v5.906H2v.997h2V10h10.045v2.996H16v-1.038h1V6.079z"></svg:path>`,
})
export class SiGlyphWieghtIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

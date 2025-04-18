import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphRulerIcon],svg[si-glyph-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 0v16h8V0zm1 2h2v1H6zm0 6h2v1H6zm2 7H6v-1h2zm1-3H6v-1h3zm0-6H6V5h3z"></svg:path>`,
})
export class SiGlyphRulerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPianoIcon],svg[si-glyph-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3v9h15.986V3zm2 1h2v1H2zm13.083 7.059H.992V7h1.091v2.938h.909V7h1.091v2.938h.909V7h1.091v2.938h.909V7h2.091v2.938h.909V7h1.091v2.938h.909V7h1.091v2.938h.909V7h1.091zM15 5H8V4h7z"></svg:path>`,
})
export class SiGlyphPianoIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

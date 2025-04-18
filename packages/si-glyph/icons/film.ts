import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFilmIcon],svg[si-glyph-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 1h-.988v1h-2.017V1H4.101v1h-2.2V1H1v16h.901v-1h2.053v1h8.041v-1h2.017v1H15zM4 14H2v-2h2zm0-4H2V8h2zm0-4H2V4h2zm7 9H5v-5h6zm0-7H5V3h6zm3 6h-2v-2h2zm0-4h-2V8h2zm-2-4V4h2v2z"></svg:path>`,
})
export class SiGlyphFilmIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

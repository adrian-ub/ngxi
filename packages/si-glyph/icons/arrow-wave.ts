import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowWaveIcon],svg[si-glyph-arrow-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.031 7.125V9h-2.062l-.004-4H8.016l.027 6H5.984L5.98 7.031H2.035L2.031 9H1.004v1h1.949l.004-2h2.07l.004 4h3.922l.004-6h2.059l.004 4h3.011v1.958L17 9.5z"></svg:path>`,
})
export class SiGlyphArrowWaveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphGlassWaterIcon],svg[si-glyph-glass-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.365 12.336l3.295 3.303a1.21 1.21 0 0 0 1.713.015l10.251-7.722a1.213 1.213 0 0 0-.014-1.713L10.765.364A1.21 1.21 0 0 0 9.054.35L1.351 10.622c-.47.47-.462 1.237.014 1.714m5.971-2.564c-1.59.008-3.354-1.247-3.354-1.247l2.677-3.43l2.659-3.408a1.17 1.17 0 0 1 1.631.014l4.393 4.323a1.12 1.12 0 0 1 .012 1.604l-4.565 3.428c-.001.001-1.6-1.293-3.453-1.284"></svg:path>`,
})
export class SiGlyphGlassWaterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

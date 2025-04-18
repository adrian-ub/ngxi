import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphChartDecreaseIcon],svg[si-glyph-chart-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17 14.051H2.885V.084H1.041L1 15.875h.041v.041L17 15.875z"></svg:path><svg:path d="M16.816 2h-3.727a.13.13 0 0 0-.129.129l1.527 1.533l-3.476 4.463L8 6l-3.973 5.188l.062 1.75L8.061 8l2.949 2l4.36-5.449L16.813 6a.13.13 0 0 0 .129-.129V2.129A.125.125 0 0 0 16.816 2"></svg:path></svg:g>`,
})
export class SiGlyphChartDecreaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

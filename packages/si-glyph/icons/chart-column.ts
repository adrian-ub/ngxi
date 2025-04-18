import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphChartColumnIcon],svg[si-glyph-chart-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16 14.031H.984V1.016H.027L0 14.95h.027v.029L16 14.95z"></svg:path><svg:path d="M4.958 8.021H2.016v4.964h2.942zm5.011-1.974H7.016v6.922h2.953zm4.984-2.016H12v8.947h2.953z"></svg:path></svg:g>`,
})
export class SiGlyphChartColumnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

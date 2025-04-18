import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartSankeyVariantIcon],svg[mdi-chart-sankey-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v2H4V4H2v8h2v-2c4.16 0 5.92 2.11 7.77 4.34S15.65 19 20 19v2h2v-6h-2v2c-3.41 0-4.93-1.83-6.69-3.94C11.34 10.69 9.1 8 4 8h16v2h2V4Z"></svg:path>`,
})
export class MdiChartSankeyVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

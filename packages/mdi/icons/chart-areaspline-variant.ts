import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartAreasplineVariantIcon],svg[mdi-chart-areaspline-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 21H2V3h2v12.54L9.5 6L16 9.78l4.24-7.33l1.73 1z"></svg:path>`,
})
export class MdiChartAreasplineVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

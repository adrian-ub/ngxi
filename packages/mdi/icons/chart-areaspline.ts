import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartAreasplineIcon],svg[mdi-chart-areaspline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.45 15.18L22 7.31V21H2V3h2v12.54L9.5 6L16 9.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L4.31 19h2.26l4.39-7.56z"></svg:path>`,
})
export class MdiChartAreasplineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

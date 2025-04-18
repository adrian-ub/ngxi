import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAreaMultiIcon],svg[tdesign-chart-area-multi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm17 2.086V18.21H6v-6.152l6.59-5.99l2.967 3.461zM8.258 16.21H19v-3.796l-3.73 3.73l-3.034-3.539zM19 9.586v-.672l-3.556 3.557l-3.033-3.538L8 12.943v.801l4.415-4.001l2.967 3.46z"></svg:path>`,
})
export class TdesignChartAreaMultiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

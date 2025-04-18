import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAreaIcon],svg[tdesign-chart-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm17 2.086V18.21H6v-6.152l6.59-5.99l2.967 3.461zm-2 4.828l-3.556 3.557l-3.033-3.538L8 12.943v3.267h11z"></svg:path>`,
})
export class TdesignChartAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartStackedIcon],svg[tdesign-chart-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h2V9h6v11h2V5h6v15h2v2H2V2zm14 18v-3.5h-2V20zm-2-5.5h2V7h-2zM10 20v-3.5H8V20zm-2-5.5h2V11H8z"></svg:path>`,
})
export class TdesignChartStackedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

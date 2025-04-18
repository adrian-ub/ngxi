import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartComboIcon],svg[tdesign-chart-combo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h2v-6h6v6h2v-9h6v9h2v2H2V2zm14 18v-7h-2v7zm-8 0v-4H8v4zm6.673-16.273L21.246 8.3l-1.414 1.414l-3.163-3.163l-6.782 6.74l-4.594-4.594l1.414-1.415l3.184 3.185z"></svg:path>`,
})
export class TdesignChartComboIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

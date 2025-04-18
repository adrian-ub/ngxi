import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartClusterBarIcon],svg[carbon-chart-cluster-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path><svg:path fill="currentColor" d="M10 16h2v10h-2zm-3 6h2v4H7zM26 8h2v18h-2zm-3 6h2v12h-2zm-6 12h-2V12h2zm3 0h-2v-8h2z"></svg:path>`,
})
export class CarbonChartClusterBarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

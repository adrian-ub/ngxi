import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartErrorBarAltIcon],svg[carbon-chart-error-bar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10V8H8v2h2v4.184a2.983 2.983 0 0 0 0 5.632V24H8v2h6v-2h-2v-4.184a2.983 2.983 0 0 0 0-5.632V10zm12-4V4h-6v2h2v2.184a2.983 2.983 0 0 0 0 5.632V18h-2v2h6v-2h-2v-4.184a2.983 2.983 0 0 0 0-5.632V6z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonChartErrorBarAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

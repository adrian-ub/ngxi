import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartColumnFloatingIcon],svg[carbon-chart-column-floating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h-8V4h8zm-6-2h4V6h-4zm-6 4H8V10h8zm-6-2h4V12h-4z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonChartColumnFloatingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

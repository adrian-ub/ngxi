import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFlowLogsVpcIcon],svg[carbon-flow-logs-vpc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h12v2H18zm0 4h12v2H18zm0 4h8v2h-8z"></svg:path><svg:path fill="currentColor" d="M24 4a3.996 3.996 0 0 0-3.858 3H12V4H4v8h8V9h8.142a4 4 0 0 0 .425 1.019L10.019 20.567A3.95 3.95 0 0 0 8 20a4 4 0 1 0 3.858 5H16v-2h-4.142a4 4 0 0 0-.425-1.019l10.548-10.548A3.95 3.95 0 0 0 24 12a4 4 0 0 0 0-8m-14 6H6V6h4ZM8 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16-16a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonFlowLogsVpcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

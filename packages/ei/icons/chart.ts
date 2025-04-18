import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiChartIcon],svg[ei-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 36h-2V26h-4v10h-2V24h8zm10 0h-2V20h-4v16h-2V18h8zm10 0h-2V14h-4v22h-2V12h8zM8 36h32v2H8z"></svg:path>`,
})
export class EiChartIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

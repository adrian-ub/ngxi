import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartUpBFillIcon],svg[mage-chart-up-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 3.05a2.72 2.72 0 0 0-1.94-.8h-2A2.73 2.73 0 0 0 14.25 5v1.25H11A2.73 2.73 0 0 0 8.25 9v2.25H5A2.73 2.73 0 0 0 2.25 14v5A2.75 2.75 0 0 0 5 21.75h14A2.77 2.77 0 0 0 21.75 19V5a2.74 2.74 0 0 0-.81-1.95m-6.69 17.2h-4.5V8.97A1.23 1.23 0 0 1 11 7.72h3.25z"></svg:path>`,
})
export class MageChartUpBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

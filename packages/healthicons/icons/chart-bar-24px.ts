import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartBar24pxIcon],svg[healthicons-chart-bar-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V2h2v18h2V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10h2V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v15h2v2H4a2 2 0 0 1-2-2"></svg:path>`,
})
export class HealthiconsChartBar24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

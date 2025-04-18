import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartBarStacked24pxIcon],svg[healthicons-chart-bar-stacked-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 20V2h2v18h2V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10h2V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v15h2v2H4a2 2 0 0 1-2-2m16-10V6h-2v4zm-8 4v-3H8v3z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsChartBarStacked24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

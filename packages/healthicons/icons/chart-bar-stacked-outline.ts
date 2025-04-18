import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartBarStackedOutlineIcon],svg[healthicons-chart-bar-stacked-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 24a1 1 0 0 0-1 1v15H8V7H6v34a1 1 0 0 0 1 1h34v-2h-2V13a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v27h-2V21a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v19h-2V25a1 1 0 0 0-1-1zm21 16h4V26h-4zm4-16h-4V14h4zm-14 6v10h4V30zm4-2h-4v-6h4zm-14 6v6h4v-6zm4-2h-4v-6h4z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsChartBarStackedOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

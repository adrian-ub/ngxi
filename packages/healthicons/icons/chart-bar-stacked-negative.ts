import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartBarStackedNegativeIcon],svg[healthicons-chart-bar-stacked-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsChartBarStackedNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm8 40V7H6v34a1 1 0 0 0 1 1h34v-2h-2V13a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v27h-2V21a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v19h-2V25a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v15zm29-16h-4V14h4zm-14-2h4v6h-4zm-6 10h-4v-6h4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsChartBarStackedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsChartBarStackedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartCovariateIcon],svg[tabler-chart-covariate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 11h.009M14 15h.009M12 6h.009M8 10h.009M3 21L20 4M3 3v18h18"></svg:path>`,
})
export class TablerChartCovariateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

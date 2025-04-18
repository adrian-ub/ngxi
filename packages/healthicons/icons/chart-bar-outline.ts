import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartBarOutlineIcon],svg[healthicons-chart-bar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 42a1 1 0 0 1-1-1V7h2v33h3V25a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15h2V21a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v19h2V13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v27h2v2zm30-2V14h-4v26zm-10 0h-4V22h4zm-10 0V26h-4v14z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsChartBarOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartBarNegativeIcon],svg[healthicons-chart-bar-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsChartBarNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8 7v33h3V25a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15h2V21a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v19h2V13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v27h2v2H7a1 1 0 0 1-1-1V7z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsChartBarNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsChartBarNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

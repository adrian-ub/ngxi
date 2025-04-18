import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartLineStackedOutline24pxIcon],svg[healthicons-chart-line-stacked-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V2h2v9.478l3.725-4.062l6.34 1.612l4.373-5.61l1.606 1.218l-5.176 6.639l-6.447-1.64l-4.342 4.735L4 14.3v3.046l4.81-5.078l6.343 1.613l3.792-4.66l1.58 1.25l-4.597 5.649l-6.443-1.639L4.258 20H22v2H4a2 2 0 0 1-2-2"></svg:path>`,
})
export class HealthiconsChartLineStackedOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsChartBarIcon],svg[dashicons-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18V2h-4v16zm-6 0V7H8v11zm-6 0v-8H2v8z"></svg:path>`,
})
export class DashiconsChartBarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

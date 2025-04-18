import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnChartBarIcon],svg[typcn-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4a2 2 0 0 0-4 0v12h4zm5 4a2 2 0 0 0-4 0v8h4zM9 11a2 2 0 0 0-4 0v5h4zm10 8H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2"></svg:path>`,
})
export class TypcnChartBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

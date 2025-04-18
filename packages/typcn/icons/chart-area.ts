import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnChartAreaIcon],svg[typcn-chart-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a2 2 0 0 0-3.562-1.25l-2.789 3.486L11.2 6.4a2 2 0 0 0-2.762.351l-4 5A2 2 0 0 0 4 13v3h16zm0 13H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2"></svg:path>`,
})
export class TypcnChartAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

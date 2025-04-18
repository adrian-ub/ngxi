import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPieChartFIcon],svg[jam-pie-chart-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 11c-.501 5.053-4.765 9-9.95 9c-5.523 0-10-4.477-10-10C0 4.815 3.947.551 9 .05V11zm0-2H11V.05A10 10 0 0 1 19.95 9"></svg:path>`,
})
export class JamPieChartFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

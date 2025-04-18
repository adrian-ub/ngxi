import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartPieOffIcon],svg[tabler-chart-pie-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.63 5.643a9 9 0 0 0 12.742 12.715m1.674-2.29A9 9 0 0 0 20.8 14a1 1 0 0 0-1-1H17m-4 0a2 2 0 0 1-2-2m0-4V4a.9.9 0 0 0-1-.8a9 9 0 0 0-2.057.749M15 3.5A9 9 0 0 1 20.5 9H16a1 1 0 0 1-1-1zM3 3l18 18"></svg:path>`,
})
export class TablerChartPieOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

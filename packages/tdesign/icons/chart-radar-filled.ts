import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRadarFilledIcon],svg[tdesign-chart-radar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.001 1.49L1.815 8.164L11 11.15zm-9.805 8.576l3.51 10.8l5.677-7.815zM6.324 22.04h11.354l-5.677-7.813zm12.971-1.176l3.508-10.797l-9.184 2.984zm2.891-12.699L13 1.492v9.657z"></svg:path>`,
})
export class TdesignChartRadarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

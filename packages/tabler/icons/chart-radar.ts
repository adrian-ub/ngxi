import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartRadarIcon],svg[tabler-chart-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 3l9.5 7L18 21H6L2.5 10z"></svg:path><svg:path d="m12 7.5l5.5 4L15 17H8.5l-2-5.5z"></svg:path><svg:path d="m2.5 10l9.5 3l9.5-3"></svg:path><svg:path d="M12 3v10l6 8M6 21l6-8"></svg:path></svg:g>`,
})
export class TablerChartRadarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

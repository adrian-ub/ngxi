import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartPie3Icon],svg[tabler-chart-pie-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 12l-6.5 5.5M12 3v9h9"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path></svg:g>`,
})
export class TablerChartPie3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

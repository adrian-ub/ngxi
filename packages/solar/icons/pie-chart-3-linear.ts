import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3LinearIcon],svg[solar-pie-chart-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685Z"></svg:path><svg:path stroke-linecap="round" d="M14.5 2.315A10.02 10.02 0 0 1 21.685 9.5"></svg:path></svg:g>`,
})
export class SolarPieChart3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

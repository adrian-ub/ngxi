import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3BoldIcon],svg[solar-pie-chart-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.774 2.128a.75.75 0 0 1 .913-.54a10.77 10.77 0 0 1 7.725 7.725a.75.75 0 0 1-1.453.374a9.27 9.27 0 0 0-6.646-6.646a.75.75 0 0 1-.54-.913" clip-rule="evenodd"></svg:path>`,
})
export class SolarPieChart3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartPpfIcon],svg[tabler-chart-ppf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 17c0-6.075-5.373-11-12-11M3 3v18h18"></svg:path>`,
})
export class TablerChartPpfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

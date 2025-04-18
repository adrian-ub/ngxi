import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmChartLineIcon],svg[charm-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.75 11.25l2.5-4.5l2.5 2.5l3.5-6m-11.5-1.5v12.5h12.5"></svg:path>`,
})
export class CharmChartLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

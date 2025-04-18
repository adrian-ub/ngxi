import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPieChartLightIcon],svg[lets-icons-pie-chart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path stroke-linecap="round" d="M12 12h9m-9-9v8.938q.001.062.044.106L18 18"></svg:path></svg:g>`,
})
export class LetsIconsPieChartLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

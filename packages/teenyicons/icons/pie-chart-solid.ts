import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPieChartSolidIcon],svg[teenyicons-pie-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 .016a7.5 7.5 0 1 0 5.438 13.13L7.15 7.857A.5.5 0 0 1 7 7.5z"></svg:path><svg:path fill="currentColor" d="M13.145 12.438A7.47 7.47 0 0 0 15 7.5a7.5 7.5 0 0 0-.581-2.9L8.344 7.637zm.825-8.732A7.5 7.5 0 0 0 8 .016v6.675z"></svg:path>`,
})
export class TeenyiconsPieChartSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

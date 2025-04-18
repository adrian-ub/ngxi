import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteChartSolidIcon],svg[flowbite-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M4 4v15c0 .6.4 1 1 1h15"></svg:path><svg:path stroke-linejoin="round" d="m8 16l2.5-5.5l3 3L17.3 7L20 9.7"></svg:path></svg:g>`,
})
export class FlowbiteChartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteChartOutlineIcon],svg[flowbite-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5l3 3L17.273 7L20 9.667"></svg:path>`,
})
export class FlowbiteChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

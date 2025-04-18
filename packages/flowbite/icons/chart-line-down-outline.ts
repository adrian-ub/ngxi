import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteChartLineDownOutlineIcon],svg[flowbite-chart-line-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4l4-4l5 5m0 0h-3.207M20 15v-3.207"></svg:path>`,
})
export class FlowbiteChartLineDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

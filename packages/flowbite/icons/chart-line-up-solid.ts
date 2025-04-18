import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteChartLineUpSolidIcon],svg[flowbite-chart-line-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 4.5V19c0 .6.4 1 1 1h15"></svg:path><svg:path d="m7 10l4 4l4-4l5 5m0 0h-3.2m3.2 0v-3.2"></svg:path></svg:g>`,
})
export class FlowbiteChartLineUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

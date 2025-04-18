import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbitePieChartSolidIcon],svg[flowbite-pie-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.5 2a7 7 0 0 0-.5 0a1 1 0 0 0-1 1v8c0 .6.4 1 1 1h8c.5 0 1-.4 1-1v-.5A8.5 8.5 0 0 0 13.5 2"></svg:path><svg:path d="M11 6a1 1 0 0 0-1-1a8.5 8.5 0 1 0 9 9a1 1 0 0 0-1-1h-7z"></svg:path></svg:g>`,
})
export class FlowbitePieChartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteChartPieSolidIcon],svg[flowbite-chart-pie-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7 7 0 0 0 22 10.5A8.5 8.5 0 0 0 13.5 2"></svg:path><svg:path d="M11 6.025a1 1 0 0 0-1.065-.998a8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11z"></svg:path></svg:g>`,
})
export class FlowbiteChartPieSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDashboardCarIcon],svg[icon-park-twotone-dashboard-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDashboardCar0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6.572 37.428A21.9 21.9 0 0 1 2 24C2 11.85 11.85 2 24 2s22 9.85 22 22c0 5.056-1.705 9.713-4.572 13.428"></svg:path><svg:path d="M12.304 31.697A13.94 13.94 0 0 1 10 24c0-7.732 6.268-14 14-14s14 6.268 14 14c0 2.843-.847 5.488-2.303 7.697"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="m24 30l16 16H8z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDashboardCar0)"></svg:path>`,
})
export class IconParkTwotoneDashboardCarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

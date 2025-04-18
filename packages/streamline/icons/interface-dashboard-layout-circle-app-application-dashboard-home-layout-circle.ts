import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayoutCircleAppApplicationDashboardHomeLayoutCircleIcon],svg[streamline-interface-dashboard-layout-circle-app-application-dashboard-home-layout-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3.25" cy="3.25" r="2.75"></svg:circle><svg:circle cx="10.75" cy="3.25" r="2.75"></svg:circle><svg:circle cx="3.25" cy="10.75" r="2.75"></svg:circle><svg:circle cx="10.75" cy="10.75" r="2.75"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDashboardLayoutCircleAppApplicationDashboardHomeLayoutCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

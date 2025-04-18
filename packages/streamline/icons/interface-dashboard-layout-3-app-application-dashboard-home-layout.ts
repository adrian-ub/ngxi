import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayout3AppApplicationDashboardHomeLayoutIcon],svg[streamline-interface-dashboard-layout-3-app-application-dashboard-home-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="7" x="8.5" y="6.5" rx=".5"></svg:rect><svg:rect width="5" height="3.01" x="8.5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="7" x=".5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="3.01" x=".5" y="10.49" rx=".5"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceDashboardLayout3AppApplicationDashboardHomeLayoutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayout2CornersDashboardFrameLayoutCircleSquareCenterIcon],svg[streamline-interface-dashboard-layout-2-corners-dashboard-frame-layout-circle-square-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5.5h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m7 13h2a1 1 0 0 0 1-1v-2m-13 0v2a1 1 0 0 0 1 1h2"></svg:path><svg:circle cx="7" cy="7" r="3.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDashboardLayout2CornersDashboardFrameLayoutCircleSquareCenterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

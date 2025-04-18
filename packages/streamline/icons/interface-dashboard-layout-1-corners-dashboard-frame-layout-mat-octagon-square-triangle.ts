import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayout1CornersDashboardFrameLayoutMatOctagonSquareTriangleIcon],svg[streamline-interface-dashboard-layout-1-corners-dashboard-frame-layout-mat-octagon-square-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M.5 6.5L6 .5m7.5 6L8 .5m-7.5 7l5.5 6m7.5-6l-5.5 6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDashboardLayout1CornersDashboardFrameLayoutMatOctagonSquareTriangleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudWarningIcon],svg[streamline-cloud-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11.549h1.273a2.73 2.73 0 0 0 .61-5.388a.25.25 0 0 1-.173-.2A3.868 3.868 0 0 0 3.7 5.05a.23.23 0 0 1-.21.127a3.193 3.193 0 0 0-1.886 5.589c.637.557 1.395.782 2.315.782h.58M7 7.154v3.5m0 2.596a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path>`,
})
export class StreamlineCloudWarningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

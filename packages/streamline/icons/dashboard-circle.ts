import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDashboardCircleIcon],svg[streamline-dashboard-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.25 6a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m7.5 0a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-7.5 7.5a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m7.5 0a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5"></svg:path>`,
})
export class StreamlineDashboardCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

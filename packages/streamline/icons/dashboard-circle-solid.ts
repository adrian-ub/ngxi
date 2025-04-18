import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDashboardCircleSolidIcon],svg[streamline-dashboard-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m8 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M3 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6m11-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDashboardCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

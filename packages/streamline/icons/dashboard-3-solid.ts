import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDashboard3SolidIcon],svg[streamline-dashboard-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm7 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.01a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm-8 3.99a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDashboard3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

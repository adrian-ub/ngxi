import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDashboard1FilledIcon],svg[tdesign-dashboard-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v7H2zm11 0h9v11h-9zM2 11h9v11H2zm11 4h9v7h-9z"></svg:path>`,
})
export class TdesignDashboard1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

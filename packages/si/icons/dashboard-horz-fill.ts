import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siDashboardHorzFillIcon],svg[si-dashboard-horz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M4 13v-2h16v2h-9v7H9v-7z" clip-rule="evenodd"></svg:path>`,
})
export class SiDashboardHorzFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

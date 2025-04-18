import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDashboard02Icon],svg[ci-dashboard-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20H11v-7h11v7ZM9 20H2v-7h7v7Zm13-9H2V4h20v7Z"></svg:path>`,
})
export class CiDashboard02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

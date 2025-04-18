import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDashboardFIcon],svg[jam-dashboard-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.832 14.565a10 10 0 0 1-.832-4c0-5.523 4.477-10 10-10s10 4.477 10 10a10 10 0 0 1-.832 4zm9.168-9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5-3a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamDashboardFIcon {
  readonly viewBox = input("-2 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

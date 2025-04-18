import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDashboardIcon],svg[jam-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.832 14A10 10 0 0 1 0 10C0 4.477 4.477 0 10 0s10 4.477 10 10a10 10 0 0 1-.832 4zm16.916-2a8 8 0 1 0-15.497 0zM10 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2M5 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5-3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamDashboardIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

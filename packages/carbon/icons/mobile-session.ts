import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMobileSessionIcon],svg[carbon-mobile-session-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 18c-3.308 0-6 2.691-6 6s2.692 6 6 6s6-2.691 6-6s-2.692-6-6-6m0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4v4h4c0 2.206-1.794 4-4 4"></svg:path><svg:path fill="currentColor" d="M16 28H9V8h14v7h2V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h7zM9 4h14v2H9z"></svg:path>`,
})
export class CarbonMobileSessionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

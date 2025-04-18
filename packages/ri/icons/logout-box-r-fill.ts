import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLogoutBoxRFillIcon],svg[ri-logout-box-r-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm10-6l5-4l-5-4v3H9v2h6z"></svg:path>`,
})
export class RiLogoutBoxRFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

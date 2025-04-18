import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLogoutCircleRFillIcon],svg[ri-logout-circle-r-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m5-6l5-4l-5-4v3H9v2h8z"></svg:path>`,
})
export class RiLogoutCircleRFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

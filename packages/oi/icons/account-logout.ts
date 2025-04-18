import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiAccountLogoutIcon],svg[oi-account-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v1h4v5H3v1h5V0zM2 2L0 3.5L2 5V4h4V3H2z"></svg:path>`,
})
export class OiAccountLogoutIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiAccountLoginIcon],svg[oi-account-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v1h4v5H3v1h5V0zm1 2v1H0v1h4v1l2-1.5z"></svg:path>`,
})
export class OiAccountLoginIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

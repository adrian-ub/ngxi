import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOtpAuthenticatorIcon],svg[arcticons-otp-authenticator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.83 26.342a7.836 7.836 0 0 1-9.498-2.61a7.276 7.276 0 0 1 .982-9.516a7.88 7.88 0 0 1 9.845-.736a7.31 7.31 0 0 1 2.479 9.257m-3.702 3.607l4.082 4.083h2.295v2.19h2.241v2.248l1.04 1.041H36v-3.278l-9.503-9.503"></svg:path><svg:circle cx="17.498" cy="17.337" r="2.288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsOtpAuthenticatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLoginPasswordLockLoginPadlockPasswordSecureSecurityTextboxTypeIcon],svg[streamline-interface-login-password-lock-login-padlock-password-secure-security-textbox-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="7" x=".5" y="3.5" rx="1"></svg:rect><svg:circle cx="3.5" cy="7" r=".5"></svg:circle><svg:circle cx="6.5" cy="7" r=".5"></svg:circle><svg:path d="M9.5 8H11"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLoginPasswordLockLoginPadlockPasswordSecureSecurityTextboxTypeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

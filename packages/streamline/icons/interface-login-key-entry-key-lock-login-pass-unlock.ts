import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLoginKeyEntryKeyLockLoginPassUnlockIcon],svg[streamline-interface-login-key-entry-key-lock-login-pass-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.62 7.38L11.5 1.5l2 2m-4.25.25L11 5.5"></svg:path><svg:circle cx="3.5" cy="9.5" r="3"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceLoginKeyEntryKeyLockLoginPassUnlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

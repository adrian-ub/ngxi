import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLoginDialPadFingerPasswordDialPadDotFingerIcon],svg[streamline-interface-login-dial-pad-finger-password-dial-pad-dot-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5V8.25A1.25 1.25 0 0 1 8.25 7h0A1.25 1.25 0 0 1 9.5 8.25V11h2a2 2 0 0 1 2 2v.5"></svg:path><svg:circle cx="1" cy="1" r=".5"></svg:circle><svg:circle cx="5" cy="1" r=".5"></svg:circle><svg:circle cx="9" cy="1" r=".5"></svg:circle><svg:circle cx="1" cy="4.5" r=".5"></svg:circle><svg:circle cx="5" cy="4.5" r=".5"></svg:circle><svg:circle cx="9" cy="4.5" r=".5"></svg:circle><svg:circle cx="1" cy="8" r=".5"></svg:circle><svg:path d="M5 8.5a.5.5 0 0 1 0-1Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLoginDialPadFingerPasswordDialPadDotFingerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

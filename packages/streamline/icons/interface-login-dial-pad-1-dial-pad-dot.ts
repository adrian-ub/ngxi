import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLoginDialPad1DialPadDotIcon],svg[streamline-interface-login-dial-pad-1-dial-pad-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2" cy="2" r="1.5"></svg:circle><svg:circle cx="2" cy="7" r="1.5"></svg:circle><svg:circle cx="7" cy="2" r="1.5"></svg:circle><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:circle cx="7" cy="12" r="1.5"></svg:circle><svg:circle cx="12" cy="2" r="1.5"></svg:circle><svg:circle cx="12" cy="7" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceLoginDialPad1DialPadDotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

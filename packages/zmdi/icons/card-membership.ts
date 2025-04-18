import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCardMembershipIcon],svg[zmdi-card-membership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v235q0 18-12.5 30.5T384 323h-85v106l-86-42l-85 42V323H43q-18 0-30.5-12.5T0 280V45q0-17 12.5-29.5T43 3zm0 277v-43H43v43zm0-107V45H43v128z"></svg:path>`,
})
export class ZmdiCardMembershipIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

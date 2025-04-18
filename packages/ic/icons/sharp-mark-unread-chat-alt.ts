import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMarkUnreadChatAltIcon],svg[ic-sharp-mark-unread-chat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19" cy="3" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M6 8V6h9.03a4.9 4.9 0 0 1-.92-4H2.01L2 22l4-4h16V6.97C21.16 7.61 20.13 8 19 8zm8 6H6v-2h8zm4-3H6V9h12z"></svg:path>`,
})
export class IcSharpMarkUnreadChatAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineMarkUnreadChatAltIcon],svg[ic-outline-mark-unread-chat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16H4V4h10.1a5 5 0 0 1 0-2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V6.98c-.58.44-1.26.77-2 .92z"></svg:path><svg:circle cx="19" cy="3" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M6 12h8v2H6zm0-3h12v2H6zm0-1h12v-.1A5 5 0 0 1 15.03 6H6z"></svg:path>`,
})
export class IcOutlineMarkUnreadChatAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

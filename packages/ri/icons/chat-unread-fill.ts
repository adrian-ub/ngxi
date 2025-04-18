import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatUnreadFillIcon],svg[ri-chat-unread-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2q.515 0 1-.1V18a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h13.1q-.1.486-.1 1a5 5 0 0 0 5 5"></svg:path>`,
})
export class RiChatUnreadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

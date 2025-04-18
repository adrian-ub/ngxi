import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalNotificationIcon],svg[streamline-chat-bubble-oval-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.114.585a6.474 6.474 0 0 0-4.503 9.96L.526 13.474l3.635-.658a6.464 6.464 0 0 0 9.274-5.14"></svg:path><svg:path d="M10.984 5.505a2.49 2.49 0 1 0 0-4.98a2.49 2.49 0 0 0 0 4.98"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleOvalNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

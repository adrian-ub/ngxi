import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailChatBubbleSquareWarningBubbleSquareMessagesNotificationChatMessageWarningAlertIcon],svg[streamline-mail-chat-bubble-square-warning-bubble-square-messages-notification-chat-message-warning-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1Zm3-9.5v3"></svg:path><svg:circle cx="7.5" cy="9" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineMailChatBubbleSquareWarningBubbleSquareMessagesNotificationChatMessageWarningAlertIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

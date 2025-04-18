import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailChatBubbleTypingSquareMessagesMessageBubbleTypingSquareChatIcon],svg[streamline-mail-chat-bubble-typing-square-messages-message-bubble-typing-square-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="4.25" cy="6.5" r=".5"></svg:circle><svg:circle cx="7.5" cy="6.5" r=".5"></svg:circle><svg:circle cx="10.75" cy="6.5" r=".5"></svg:circle><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1Z"></svg:path></svg:g>`,
})
export class StreamlineMailChatBubbleTypingSquareMessagesMessageBubbleTypingSquareChatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

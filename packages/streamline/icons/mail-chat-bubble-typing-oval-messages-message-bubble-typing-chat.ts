import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailChatBubbleTypingOvalMessagesMessageBubbleTypingChatIcon],svg[streamline-mail-chat-bubble-typing-oval-messages-message-bubble-typing-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3.5" cy="7" r=".5"></svg:circle><svg:circle cx="6.75" cy="7" r=".5"></svg:circle><svg:circle cx="10" cy="7" r=".5"></svg:circle><svg:path d="M7 .5a6.5 6.5 0 0 0-5.41 10.1L.5 13.5l3.65-.66A6.5 6.5 0 1 0 7 .5Z"></svg:path></svg:g>`,
})
export class StreamlineMailChatBubbleTypingOvalMessagesMessageBubbleTypingChatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

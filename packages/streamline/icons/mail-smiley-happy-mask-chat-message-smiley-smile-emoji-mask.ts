import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailSmileyHappyMaskChatMessageSmileySmileEmojiMaskIcon],svg[streamline-mail-smiley-happy-mask-chat-message-smiley-smile-emoji-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 8s.5 1.5 3 1.5S10 8 10 8"></svg:path><svg:path d="M13.5 7a6.5 6.5 0 0 1-13 0V.5h13Z"></svg:path><svg:path d="M5 5a1 1 0 0 0-2 0m8 0a1 1 0 0 0-2 0"></svg:path></svg:g>`,
})
export class StreamlineMailSmileyHappyMaskChatMessageSmileySmileEmojiMaskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

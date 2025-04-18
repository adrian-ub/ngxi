import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatPollFilledIcon],svg[tdesign-chat-poll-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2v16H6.876L1.5 22.704V2zM13 14V6h-2v8zm5 0V9h-2v5zM8 14v-3H6v3z"></svg:path>`,
})
export class TdesignChatPollFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

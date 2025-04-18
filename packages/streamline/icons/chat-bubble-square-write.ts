import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareWriteIcon],svg[streamline-chat-bubble-square-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5.5h-5a1 1 0 0 0-1 1v9l-1 3l4-1h8a1 1 0 0 0 1-1v-5"></svg:path><svg:path d="m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42z"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleSquareWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

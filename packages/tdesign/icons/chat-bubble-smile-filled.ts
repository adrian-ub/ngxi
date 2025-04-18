import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleSmileFilledIcon],svg[tdesign-chat-bubble-smile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1M8.333 13.6a4.001 4.001 0 0 0 7.335 0l.4-.917l1.833.801l-.4.916a6.001 6.001 0 0 1-11.001 0l-.4-.916l1.832-.8z"></svg:path>`,
})
export class TdesignChatBubbleSmileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

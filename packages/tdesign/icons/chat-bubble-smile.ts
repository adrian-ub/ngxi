import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleSmileIcon],svg[tdesign-chat-bubble-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.333 13.6l-.4-.917l-1.833.801l.4.916a6.001 6.001 0 0 0 11 0l.401-.916l-1.833-.8l-.4.916a4.001 4.001 0 0 1-7.335 0"></svg:path><svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 9 9H4.7l1.267-2.282l-.504-.532A8.97 8.97 0 0 1 3 12"></svg:path>`,
})
export class TdesignChatBubbleSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

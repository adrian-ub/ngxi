import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleHistoryFilledIcon],svg[tdesign-chat-bubble-history-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1m1 10.586L16.414 15L15 16.414l-4-4V5.5h2z"></svg:path>`,
})
export class TdesignChatBubbleHistoryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

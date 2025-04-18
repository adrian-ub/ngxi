import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleErrorFilledIcon],svg[tdesign-chat-bubble-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12C1 5.925 5.925 1 12 1m-1 5.5V14h2V6.5zm2.004 9H11v2.004h2.004z"></svg:path>`,
})
export class TdesignChatBubbleErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

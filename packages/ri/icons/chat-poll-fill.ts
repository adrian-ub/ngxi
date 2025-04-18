import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatPollFillIcon],svg[ri-chat-poll-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-8 4h-2v8h2zm4 2h-2v6h2zm-8 2H7v4h2z"></svg:path>`,
})
export class RiChatPollFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

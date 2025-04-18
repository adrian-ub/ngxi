import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatPollLineIcon],svg[ri-chat-poll-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-1 2H4v13.385L5.763 17H20zm-7 2v8h-2V7zm4 2v6h-2V9zm-8 2v4H7v-4z"></svg:path>`,
})
export class RiChatPollLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

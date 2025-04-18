import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatHistoryFillIcon],svg[ri-chat-history-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m1 5h-2v7h6v-2h-4z"></svg:path>`,
})
export class RiChatHistoryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

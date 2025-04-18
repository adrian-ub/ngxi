import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkChatUnreadIcon],svg[material-symbols-mark-chat-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6q-1.25 0-2.125-.875T16 3t.875-2.125T19 0t2.125.875T22 3t-.875 2.125T19 6M2 22V4q0-.825.588-1.412T4 2h10.1q-.1.5-.1 1t.1 1q.35 1.75 1.725 2.875T19 8q.8 0 1.575-.25T22 7v9q0 .825-.587 1.413T20 18H6z"></svg:path>`,
})
export class MaterialSymbolsMarkChatUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

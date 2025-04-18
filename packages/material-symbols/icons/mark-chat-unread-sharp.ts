import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkChatUnreadSharpIcon],svg[material-symbols-mark-chat-unread-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6q-1.25 0-2.125-.875T16 3t.875-2.125T19 0t2.125.875T22 3t-.875 2.125T19 6M2 22V2h12.1q-.1.5-.1 1t.1 1q.35 1.725 1.725 2.863T19 8q.8 0 1.575-.25T22 7v11H6z"></svg:path>`,
})
export class MaterialSymbolsMarkChatUnreadSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

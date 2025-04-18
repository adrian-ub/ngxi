import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkChatUnreadOutlineSharpIcon],svg[material-symbols-mark-chat-unread-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V2h12.1q-.1.5-.1 1t.1 1H4v13.125L5.15 16H20V7.9q.575-.125 1.075-.337T22 7v11H6zM4 4v12zm15 2q-1.25 0-2.125-.875T16 3t.875-2.125T19 0t2.125.875T22 3t-.875 2.125T19 6"></svg:path>`,
})
export class MaterialSymbolsMarkChatUnreadOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

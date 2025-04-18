import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkChatUnreadRoundedIcon],svg[material-symbols-mark-chat-unread-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6q-1.25 0-2.125-.875T16 3t.875-2.125T19 0t2.125.875T22 3t-.875 2.125T19 6M6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h9.1q.4 0 .663.3T14 3q0 1.125.488 2.125T15.85 6.85q.65.525 1.463.838T19 8q.45 0 .9-.075t.875-.25t.825.05t.4.65V16q0 .825-.588 1.413T20 18z"></svg:path>`,
})
export class MaterialSymbolsMarkChatUnreadRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

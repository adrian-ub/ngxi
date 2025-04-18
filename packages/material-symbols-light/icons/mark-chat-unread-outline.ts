import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkChatUnreadOutlineIcon],svg[material-symbols-light-mark-chat-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20.077V4.616q0-.691.463-1.153T4.615 3H14.6q-.061.25-.071.49t-.006.51H4.616q-.231 0-.424.192T4 4.615v13.03L5.65 16h13.735q.23 0 .423-.192t.192-.423V8.342q.287-.067.527-.155q.24-.087.473-.225v7.423q0 .69-.462 1.153T19.385 17H6.077zM4 4.616v12.769V4zm15 1.846q-1.038 0-1.77-.731t-.73-1.77t.73-1.769t1.77-.73t1.77.73t.73 1.77t-.73 1.769t-1.77.73"></svg:path>`,
})
export class MaterialSymbolsLightMarkChatUnreadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

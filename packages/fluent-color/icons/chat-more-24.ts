import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorChatMore24Icon],svg[fluent-color-chat-more-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorChatMore240)" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.644-1.142l-4.29 1.117a.85.85 0 0 1-1.037-1.036l1.116-4.289A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2"></svg:path><svg:path fill="url(#fluentColorChatMore241)" d="M13.252 13H8.75l-.102.007a.75.75 0 0 0 0 1.486l.102.007h4.502l.101-.007a.75.75 0 0 0 0-1.486zm1.998-3.5h-6.5l-.102.007a.75.75 0 0 0 0 1.486L8.75 11h6.5l.102-.007a.75.75 0 0 0 0-1.486z"></svg:path><svg:defs><svg:lineargradient id="fluentColorChatMore240" x1="2.714" x2="20.178" y1="5.751" y2="35.521" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorChatMore241" x1="8.7" x2="9.227" y1="9.588" y2="15.025" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorChatMore24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

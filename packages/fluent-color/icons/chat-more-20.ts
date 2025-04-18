import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorChatMore20Icon],svg[fluent-color-chat-more-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorChatMore200)" d="M10 2a8 8 0 1 1-3.613 15.14l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8"></svg:path><svg:path fill="url(#fluentColorChatMore201)" d="M10.5 11h-3l-.09.008a.5.5 0 0 0 0 .984L7.5 12h3l.09-.008a.5.5 0 0 0 0-.984zm2-3h-5l-.09.008a.5.5 0 0 0 0 .984L7.5 9h5l.09-.008a.5.5 0 0 0 0-.984z"></svg:path><svg:defs><svg:lineargradient id="fluentColorChatMore200" x1="2.571" x2="16.54" y1="5" y2="28.815" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorChatMore201" x1="7.525" x2="7.974" y1="8.07" y2="12.414" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorChatMore20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorChatAdd16Icon],svg[fluent-color-chat-add-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorChatAdd160)" d="M8 2a6 6 0 1 1-3.004 11.195l-2.338.78a.5.5 0 0 1-.639-.612l.712-2.491A6 6 0 0 1 8 2m.5 3.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2z"></svg:path><svg:path fill="url(#fluentColorChatAdd161)" d="M8.5 5.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorChatAdd160" x1="2.429" x2="12.905" y1="4.25" y2="22.111" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorChatAdd161" x1="5.525" x2="6.522" y1="5.105" y2="11.536" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorChatAdd16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

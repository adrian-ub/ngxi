import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPoll32Icon],svg[fluent-color-poll-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPoll320)" d="M12 6.5a3.5 3.5 0 1 1 7 0v19a3.5 3.5 0 1 1-7 0z"></svg:path><svg:path fill="url(#fluentColorPoll321)" d="M22 12.5a3.5 3.5 0 1 1 7 0v13a3.5 3.5 0 1 1-7 0z"></svg:path><svg:path fill="url(#fluentColorPoll322)" d="M5.5 15A3.5 3.5 0 0 0 2 18.5v7a3.5 3.5 0 1 0 7 0v-7A3.5 3.5 0 0 0 5.5 15"></svg:path><svg:defs><svg:lineargradient id="fluentColorPoll320" x1="18.417" x2="14.222" y1="24.233" y2="2.819" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPoll321" x1="28.417" x2="25.896" y1="25.333" y2="8.608" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPoll322" x1="2.875" x2="16.259" y1="15.583" y2="23.499" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPoll32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

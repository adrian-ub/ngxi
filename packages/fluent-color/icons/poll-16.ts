import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPoll16Icon],svg[fluent-color-poll-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPoll160)" d="M6 3a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0z"></svg:path><svg:path fill="url(#fluentColorPoll161)" d="M13 5a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2"></svg:path><svg:path fill="url(#fluentColorPoll162)" d="M3 7a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2"></svg:path><svg:defs><svg:lineargradient id="fluentColorPoll160" x1="9.667" x2="7.529" y1="12.433" y2=".854" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPoll161" x1="14.667" x2="13.558" y1="13.167" y2="4.76" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPoll162" x1="1.5" x2="9.148" y1="7.333" y2="11.857" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPoll16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

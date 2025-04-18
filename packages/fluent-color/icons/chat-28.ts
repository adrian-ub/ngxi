import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorChat28Icon],svg[fluent-color-chat-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorChat280)" d="M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12a11.95 11.95 0 0 1-5.637-1.404l-4.77 1.357a1.25 1.25 0 0 1-1.544-1.544l1.356-4.77A11.95 11.95 0 0 1 2 14m7.5-2.25c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75m.75 3.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="url(#fluentColorChat281)" d="M9.5 11.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75m.75 3.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorChat280" x1="2.857" x2="23.811" y1="6.5" y2="42.224" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorChat281" x1="10.287" x2="10.961" y1="11.105" y2="17.621" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorChat28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBook32Icon],svg[fluent-color-book-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBook320)" d="M6 25h20.688S26 25.4 26 27s.688 2 .688 2H9a3 3 0 0 1-3-3z"></svg:path><svg:path fill="url(#fluentColorBook321)" d="M9 28a2 2 0 0 1-2-2h18.25A1.75 1.75 0 0 0 27 24.25V6a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h17a1 1 0 1 0 0-2z"></svg:path><svg:path fill="url(#fluentColorBook322)" d="M10.75 6A1.75 1.75 0 0 0 9 7.75v2.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 23 10.25v-2.5A1.75 1.75 0 0 0 21.25 6z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBook320" x1="15.565" x2="15.565" y1="28.2" y2="25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9DEAFF"></svg:stop><svg:stop offset=".716" stop-color="#58AAFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook321" x1="12.591" x2="16.974" y1="7.239" y2="37.373" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook322" x1="13.828" x2="20.922" y1="4.971" y2="15.271" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBook32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

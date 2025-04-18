import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBook28Icon],svg[fluent-color-book-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBook280)" d="M6 21.5h16.758s-.258.813-.258 2s.258 2 .258 2H8.75A2.75 2.75 0 0 1 6 22.75z"></svg:path><svg:path fill="url(#fluentColorBook281)" d="M8.75 2A3.75 3.75 0 0 0 5 5.75v16.5A3.75 3.75 0 0 0 8.75 26h13.5a.75.75 0 0 0 0-1.5H8.75a2.25 2.25 0 0 1-2.236-2H21.5A1.5 1.5 0 0 0 23 21V5.75A3.75 3.75 0 0 0 19.25 2z"></svg:path><svg:path fill="url(#fluentColorBook282)" d="M9.75 5.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBook280" x1="13.652" x2="13.652" y1="24.4" y2="22" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9DEAFF"></svg:stop><svg:stop offset=".716" stop-color="#58AAFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook281" x1="11.21" x2="15.139" y1="6.49" y2="32.267" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook282" x1="12.294" x2="18.321" y1="4.642" y2="12.894" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBook28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

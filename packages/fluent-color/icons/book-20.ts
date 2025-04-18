import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBook20Icon],svg[fluent-color-book-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBook200)" d="M4.5 15H16s-.5.5-.5 1.5s.5 1 .5 1H5.5a1 1 0 0 1-1-1z"></svg:path><svg:path fill="url(#fluentColorBook201)" d="M4 4v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"></svg:path><svg:path fill="url(#fluentColorBook202)" d="M6 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBook200" x1="10" x2="10" y1="17" y2="15" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9DEAFF"></svg:stop><svg:stop offset=".716" stop-color="#58AAFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook201" x1="8.14" x2="10.759" y1="4.994" y2="22.178" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook202" x1="8.759" x2="12.116" y1="3.485" y2="9.055" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBook20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBook16Icon],svg[fluent-color-book-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBook160)" d="M3.5 12.5h9.313s-.313.5-.313 1s.313 1 .313 1H5A1.5 1.5 0 0 1 3.5 13z"></svg:path><svg:path fill="url(#fluentColorBook161)" d="M11 1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1v-.003h8.5a.5.5 0 0 0 .5-.5V3a2 2 0 0 0-2-2"></svg:path><svg:path fill="url(#fluentColorBook162)" d="M6 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBook160" x1="9.5" x2="9.5" y1="14" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9DEAFF"></svg:stop><svg:stop offset=".716" stop-color="#58AAFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook161" x1="6.45" x2="8.851" y1="3.619" y2="18.621" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBook162" x1="7.069" x2="10.777" y1="2.485" y2="7.099" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBook16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

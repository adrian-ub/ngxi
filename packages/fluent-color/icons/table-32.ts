import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTable32Icon],svg[fluent-color-table-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="26" height="26" x="3" y="3" fill="url(#fluentColorTable320)" rx="6"></svg:rect><svg:path fill="url(#fluentColorTable321)" d="M22 29h2.5a4.5 4.5 0 0 0 4.5-4.5V22h-7zm0-9h7v-8h-7zm-2-8v8h-8v-8zm2-2h7V7.5A4.5 4.5 0 0 0 24.5 3H22zm-2-7v7h-8V3zm0 19v7h-8v-7zm-10-2v-8H3v8zm0-10V3H7.5A4.5 4.5 0 0 0 3 7.5V10zm0 19v-7H3v2.5A4.5 4.5 0 0 0 7.5 29z"></svg:path><svg:defs><svg:lineargradient id="fluentColorTable320" x1="4.857" x2="27.143" y1="4.857" y2="27.143" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#98F0B0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTable321" x1="3" x2="29" y1="3" y2="29" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorTable32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

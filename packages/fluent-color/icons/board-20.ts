import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBoard20Icon],svg[fluent-color-board-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBoard200)" d="m17 12l-3.5-.5l-3.5.5l-.5 2.5l.5 2.5h4a3 3 0 0 0 3-3z"></svg:path><svg:path fill="url(#fluentColorBoard201)" d="m10 3l-.5 4.5l.5 4.5h7V6a3 3 0 0 0-3-3z"></svg:path><svg:path fill="url(#fluentColorBoard202)" d="M10 17V8l-3.5-.5L3 8v6a3 3 0 0 0 3 3z"></svg:path><svg:path fill="url(#fluentColorBoard203)" d="M10 3v5H3V6a3 3 0 0 1 3-3z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBoard200" x1="7" x2="11.1" y1="9.5" y2="18.877" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#52D17C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard201" x1="11" x2="16.328" y1="4" y2="10.741" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#309C61"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard202" x1="4" x2="9.456" y1="9" y2="14.562" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard203" x1="4" x2="6.071" y1="4" y2="9.005" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#64DE89"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBoard20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

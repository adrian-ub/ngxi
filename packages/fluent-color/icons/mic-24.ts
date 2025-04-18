import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorMic24Icon],svg[fluent-color-mic-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorMic240)" d="m19.25 11.742l-.008-.119l-.001-.008a1 1 0 0 0-1.991.135v.498l-.004.21a5 5 0 0 1-4.996 4.792h-.497l-.212-.004A5 5 0 0 1 6.75 12.25v-.508l-.008-.119l-.001-.008a1 1 0 0 0-1.991.135v.5l.004.24v.005A7 7 0 0 0 11 19.21v2.048l.008.119l.001.008A1 1 0 0 0 13 21.25v-2.04a7 7 0 0 0 6.25-6.96z"></svg:path><svg:path fill="url(#fluentColorMic241)" d="M12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4"></svg:path><svg:defs><svg:lineargradient id="fluentColorMic240" x1="4.75" x2="12.11" y1="5.813" y2="23.184" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CAD2D9"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMic241" x1="6" x2="13.346" y1="-1.182" y2="23.828" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorMic24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

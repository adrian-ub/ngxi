import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCamera16Icon],svg[fluent-color-camera-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCamera160)" d="M5.276 2.83A1.5 1.5 0 0 1 6.618 2h2.764a1.5 1.5 0 0 1 1.342.83L11.309 4H12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h.691z"></svg:path><svg:path fill="url(#fluentColorCamera161)" fill-opacity=".5" d="M5.276 2.83A1.5 1.5 0 0 1 6.618 2h2.764a1.5 1.5 0 0 1 1.342.83L11.309 4H12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h.691z"></svg:path><svg:path fill="url(#fluentColorCamera163)" fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorCamera162)" d="M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="url(#fluentColorCamera164)" d="M12 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:defs><svg:radialgradient id="fluentColorCamera160" cx="0" cy="0" r="1" gradientTransform="rotate(40.097 -3.683 1.538)scale(17.648 36.5145)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset=".535" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorCamera161" cx="0" cy="0" r="1" gradientTransform="matrix(.5 4 -4.3159 .53949 9.5 9)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#312A9A"></svg:stop><svg:stop offset="1" stop-color="#312A9A" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorCamera162" cx="0" cy="0" r="1" gradientTransform="rotate(49.764 -2.724 8.25)scale(5.67646)" gradientUnits="userSpaceOnUse"><svg:stop offset=".243" stop-color="#3BD5FF"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorCamera163" x1="6.129" x2="9.129" y1="5" y2="12.125" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#DECBFF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCamera164" x1="11" x2="13" y1="5.5" y2="7" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset="1" stop-color="#F462AB"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCamera16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

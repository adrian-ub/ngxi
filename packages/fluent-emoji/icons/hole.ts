import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHoleIcon],svg[fluent-emoji-hole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f703id0)" d="M16 30.137c7.732 0 14-3.643 14-8.137s-6.268-8.137-14-8.137S2 17.506 2 22s6.268 8.137 14 8.137"></svg:path><svg:path fill="url(#f703id1)" d="M16 30.067c7.185 0 13.01-3.157 13.01-7.051s-5.825-7.05-13.01-7.05s-13.01 3.156-13.01 7.05s5.825 7.05 13.01 7.05"></svg:path><svg:defs><svg:radialgradient id="f703id0" cx="0" cy="0" r="1" gradientTransform="matrix(4.75001 -11.87503 12.18115 4.87246 23.25 15.613)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D8D1DF"></svg:stop><svg:stop offset=".989" stop-color="#90829F"></svg:stop></svg:radialgradient><svg:radialgradient id="f703id1" cx="0" cy="0" r="1" gradientTransform="matrix(9.74999 -19.62496 54.14327 26.89922 10.5 31.738)" gradientUnits="userSpaceOnUse"><svg:stop offset=".006" stop-color="#37275E"></svg:stop><svg:stop offset="1"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentEmojiHoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

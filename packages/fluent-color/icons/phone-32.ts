import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPhone32Icon],svg[fluent-color-phone-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPhone320)" d="M10.25 2A3.25 3.25 0 0 0 7 5.25v21.5A3.25 3.25 0 0 0 10.25 30h11.5A3.25 3.25 0 0 0 25 26.75V5.25A3.25 3.25 0 0 0 21.75 2z"></svg:path><svg:path fill="url(#fluentColorPhone321)" d="M14 24h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2"></svg:path><svg:defs><svg:radialgradient id="fluentColorPhone320" cx="0" cy="0" r="1" gradientTransform="rotate(61.167 2.548 6.485)scale(36.1576 71.7141)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CB7DF8"></svg:stop><svg:stop offset=".412" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorPhone321" cx="0" cy="0" r="1" gradientTransform="matrix(7.93752 6.86668 -8.0722 9.33104 12.063 24.133)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DECBFF"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPhone32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

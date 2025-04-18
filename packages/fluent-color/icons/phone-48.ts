import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPhone48Icon],svg[fluent-color-phone-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPhone480)" d="M16.25 4A4.25 4.25 0 0 0 12 8.25v31.5A4.25 4.25 0 0 0 16.25 44h15.5A4.25 4.25 0 0 0 36 39.75V8.25A4.25 4.25 0 0 0 31.75 4z"></svg:path><svg:path fill="url(#fluentColorPhone481)" d="M21.25 35.5h5.5a1.25 1.25 0 1 1 0 2.5h-5.5a1.25 1.25 0 1 1 0-2.5"></svg:path><svg:defs><svg:radialgradient id="fluentColorPhone480" cx="0" cy="0" r="1" gradientTransform="matrix(23.25027 45.24984 -86.35295 44.36986 12 2.75)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CB7DF8"></svg:stop><svg:stop offset=".412" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorPhone481" cx="0" cy="0" r="1" gradientTransform="matrix(10.58336 8.58336 -9.9767 12.30136 18.75 35.667)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DECBFF"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPhone48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWifi20Icon],svg[fluent-color-wifi-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWifi200)" d="M10 6a8.98 8.98 0 0 0-6.95 3.282A1 1 0 1 1 1.507 8.01A10.98 10.98 0 0 1 10 4a10.98 10.98 0 0 1 8.494 4.01a1 1 0 1 1-1.543 1.272A8.98 8.98 0 0 0 10 6"></svg:path><svg:path fill="url(#fluentColorWifi201)" d="M5.25 11.334A5.99 5.99 0 0 1 10 9c1.932 0 3.651.912 4.75 2.334a1 1 0 0 0 1.582-1.223A7.99 7.99 0 0 0 10 7a7.99 7.99 0 0 0-6.333 3.11a1 1 0 0 0 1.583 1.224"></svg:path><svg:path fill="url(#fluentColorWifi202)" d="M7.488 13.359A3 3 0 0 1 10 12c1.05 0 1.974.539 2.512 1.359a1 1 0 1 0 1.673-1.096A5 5 0 0 0 10 10a5 5 0 0 0-4.185 2.263a1 1 0 1 0 1.673 1.096"></svg:path><svg:path fill="url(#fluentColorWifi203)" d="M10 16.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:defs><svg:radialgradient id="fluentColorWifi200" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11 15.3509 0 10 15)" gradientUnits="userSpaceOnUse"><svg:stop offset=".114" stop-color="#8B52F4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorWifi201" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11 15.3509 0 10 15)" gradientUnits="userSpaceOnUse"><svg:stop offset=".114" stop-color="#8B52F4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorWifi202" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11 15.3509 0 10 15)" gradientUnits="userSpaceOnUse"><svg:stop offset=".114" stop-color="#8B52F4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorWifi203" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11 15.3509 0 10 15)" gradientUnits="userSpaceOnUse"><svg:stop offset=".114" stop-color="#8B52F4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorWifi20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

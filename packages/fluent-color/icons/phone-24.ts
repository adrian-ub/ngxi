import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPhone24Icon],svg[fluent-color-phone-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPhone240)" d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2z"></svg:path><svg:path fill="url(#fluentColorPhone241)" d="M13.25 18h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5"></svg:path><svg:defs><svg:radialgradient id="fluentColorPhone240" cx="0" cy="0" r="1" gradientTransform="matrix(11.62502 22.62498 -43.17655 22.18468 6 1.375)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CB7DF8"></svg:stop><svg:stop offset=".412" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorPhone241" cx="0" cy="0" r="1" gradientTransform="matrix(5.29166 5.15 -6.11557 6.2838 9.375 18.1)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DECBFF"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPhone24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

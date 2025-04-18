import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPhone16Icon],svg[fluent-color-phone-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPhone160)" d="M4 2.75C4 1.784 4.784 1 5.75 1h4.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 10.25 15h-4.5A1.75 1.75 0 0 1 4 13.25z"></svg:path><svg:path fill="url(#fluentColorPhone161)" d="M7 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></svg:path><svg:defs><svg:radialgradient id="fluentColorPhone160" cx="0" cy="0" r="1" gradientTransform="matrix(7.74999 15.83746 -29.35436 14.36442 4 .563)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CB7DF8"></svg:stop><svg:stop offset=".412" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorPhone161" cx="0" cy="0" r="1" gradientTransform="rotate(40.863 -13.18 14.129)scale(5.24774 6.16903)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DECBFF"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPhone16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

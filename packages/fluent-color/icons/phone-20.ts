import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPhone20Icon],svg[fluent-color-phone-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPhone200)" d="M6.5 2A1.5 1.5 0 0 0 5 3.5v13A1.5 1.5 0 0 0 6.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 13.5 2z"></svg:path><svg:path fill="url(#fluentColorPhone201)" d="M9 14h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1"></svg:path><svg:defs><svg:radialgradient id="fluentColorPhone200" cx="0" cy="0" r="1" gradientTransform="matrix(9.68748 18.09997 -35.3524 18.92133 5 1.5)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CB7DF8"></svg:stop><svg:stop offset=".412" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorPhone201" cx="0" cy="0" r="1" gradientTransform="rotate(40.863 -14.865 17.813)scale(5.24774 6.16903)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DECBFF"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPhone20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

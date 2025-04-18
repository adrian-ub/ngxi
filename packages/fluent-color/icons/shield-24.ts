import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShield24Icon],svg[fluent-color-shield-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShield240)" d="M3 5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 5.001-2.958 8.676-8.725 10.948a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11z"></svg:path><svg:defs><svg:radialgradient id="fluentColorShield240" cx="0" cy="0" r="1" gradientTransform="matrix(27.64308 38.74988 -34.23049 24.41907 -4.072 -9.25)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop><svg:stop offset=".682" stop-color="#5750E2"></svg:stop><svg:stop offset=".861" stop-color="#CC23D1"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorShield24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

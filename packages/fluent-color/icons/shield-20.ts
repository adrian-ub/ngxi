import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShield20Icon],svg[fluent-color-shield-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShield200)" d="M9.723 2.084a.5.5 0 0 1 .554 0a15.05 15.05 0 0 0 6.294 2.421A.5.5 0 0 1 17 5v4.5c0 3.891-2.307 6.73-6.82 8.467a.5.5 0 0 1-.36 0C5.308 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.495a15.05 15.05 0 0 0 6.293-2.421"></svg:path><svg:defs><svg:radialgradient id="fluentColorShield200" cx="0" cy="0" r="1" gradientTransform="matrix(21.50002 31 -27.12496 18.81249 -2.5 -7)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop><svg:stop offset=".682" stop-color="#5750E2"></svg:stop><svg:stop offset=".861" stop-color="#CC23D1"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorShield20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

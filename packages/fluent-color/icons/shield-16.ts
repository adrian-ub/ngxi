import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShield16Icon],svg[fluent-color-shield-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShield160)" d="M7.647 2.146a.5.5 0 0 1 .708 0C9.595 3.39 10.969 4 12.5 4a.5.5 0 0 1 .5.5v3.001c0 3.219-1.641 5.407-4.842 6.473a.5.5 0 0 1-.316 0C4.642 12.908 3 10.72 3 7.501V4.5a.5.5 0 0 1 .5-.5c1.53 0 2.904-.611 4.147-1.854"></svg:path><svg:defs><svg:radialgradient id="fluentColorShield160" cx="0" cy="0" r="1" gradientTransform="matrix(15.35727 23.24988 -19.97817 13.1962 -.929 -4.75)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop><svg:stop offset=".682" stop-color="#5750E2"></svg:stop><svg:stop offset=".861" stop-color="#CC23D1"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorShield16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

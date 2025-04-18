import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShield28Icon],svg[fluent-color-shield-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShield280)" d="M13.56 2.142a.75.75 0 0 1 .878 0c.643.464 2.088 1.312 3.897 2.041c1.81.73 3.922 1.317 5.913 1.317a.75.75 0 0 1 .75.75v7.752c0 3.027-1.703 5.841-3.838 7.95c-2.133 2.107-4.827 3.64-7.033 4.024l-.128.022l-.129-.022c-2.205-.385-4.9-1.917-7.033-4.024C4.703 19.843 3 17.029 3 14.002V6.25a.75.75 0 0 1 .75-.75c1.991 0 4.103-.587 5.914-1.317c1.808-.73 3.253-1.577 3.896-2.04"></svg:path><svg:defs><svg:radialgradient id="fluentColorShield280" cx="0" cy="0" r="1" gradientTransform="rotate(54 8.463 -11.286)scale(57.4728 51.0658)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop><svg:stop offset=".682" stop-color="#5750E2"></svg:stop><svg:stop offset=".861" stop-color="#CC23D1"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorShield28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

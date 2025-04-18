import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShield48Icon],svg[fluent-color-shield-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShield480)" d="M24.865 4.348a1.25 1.25 0 0 0-1.73 0c-2.759 2.643-6.685 4.077-10.037 4.84c-1.66.376-3.139.58-4.202.69A29 29 0 0 1 7.242 10H7.22A1.25 1.25 0 0 0 6 11.25v9.5c0 4.837 1.243 9.658 4.098 13.775c2.861 4.126 7.29 7.469 13.529 9.418c.243.076.503.076.746 0C36.94 40.016 42 30.497 42 21v-9.75A1.25 1.25 0 0 0 40.78 10h-.022l-.08-.003l-.328-.017a29 29 0 0 1-1.246-.102a36 36 0 0 1-4.202-.69c-3.353-.763-7.279-2.197-10.037-4.84"></svg:path><svg:defs><svg:radialgradient id="fluentColorShield480" cx="0" cy="0" r="1" gradientTransform="matrix(55.2861 77.49968 -68.46098 48.83815 -8.143 -18.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop><svg:stop offset=".682" stop-color="#5750E2"></svg:stop><svg:stop offset=".861" stop-color="#CC23D1"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorShield48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

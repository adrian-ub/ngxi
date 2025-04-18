import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCasePlayIcon],svg[zmdi-case-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 88h128v277q0 18-12.5 30.5T384 408H43q-18 0-30.5-12.5T0 365V88h128V45q0-17 12.5-29.5T171 3h85q18 0 30.5 12.5T299 45zM171 45v43h85V45zm-22 299l160-107l-160-85z"></svg:path>`,
})
export class ZmdiCasePlayIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

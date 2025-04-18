import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRechargeIcon],svg[arcticons-recharge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="33.486" cy="24" r="10.014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.97 34.014a10.014 10.014 0 0 1 0-20.028zM8.453 32.672C6.007 30.883 4.5 27.577 4.5 24s1.507-6.883 3.953-8.672z"></svg:path>`,
})
export class ArcticonsRechargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

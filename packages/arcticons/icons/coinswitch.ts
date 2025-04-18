import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoinswitchIcon],svg[arcticons-coinswitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="33.169" cy="8.393" r="3.893" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.832" cy="38.682" r="3.893" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.397 6.326c-4.093 0-11.133 2.238-11.133 8.295c0 11.734 21.993 8.077 21.993 18.501c0 7.913-7.695 11.752-14.498 9.933"></svg:path>`,
})
export class ArcticonsCoinswitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

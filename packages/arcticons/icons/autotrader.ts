import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAutotraderIcon],svg[arcticons-autotrader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.065 21.473l4.392-11.112h-24.49a8.42 8.42 0 0 0-7.831 5.326l-2.288 5.786zM7.79 26.677L3.458 37.64h24.49a8.42 8.42 0 0 0 7.832-5.326l2.228-5.636z"></svg:path>`,
})
export class ArcticonsAutotraderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

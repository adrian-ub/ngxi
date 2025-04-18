import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAawirelessIcon],svg[arcticons-aawireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.458" cy="33.956" r="9.544" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.001 33.956V43.5"></svg:path><svg:circle cx="22.667" cy="25.76" r="9.544" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.211 25.76v9.544m2.318-18.096a9.546 9.546 0 0 0-10.236-6.644m15.793 4.515C38.293 7.659 30.823 3.097 23.403 4.89"></svg:path>`,
})
export class ArcticonsAawirelessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

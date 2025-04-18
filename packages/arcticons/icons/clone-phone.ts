import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClonePhoneIcon],svg[arcticons-clone-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16.775" height="32.259" x="22.89" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.29"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.11 37.759v3.451a1.29 1.29 0 0 1-1.29 1.29H9.626a1.29 1.29 0 0 1-1.29-1.29V11.532a1.29 1.29 0 0 1 1.29-1.29H22.89M15.722 24.72H31.42m-11.933-2.806l-3.765 2.805m12.004 2.948l3.694-2.948"></svg:path>`,
})
export class ArcticonsClonePhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

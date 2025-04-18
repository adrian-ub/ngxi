import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsComPhoneIcon],svg[arcticons-com-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="25" height="37.04" x="11.5" y="5.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5" ry="5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 9.5h9"></svg:path><svg:circle cx="24" cy="38" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.69 22.3a5.78 5.78 0 0 0-7.38-.02v.02m9.28-2.33a8.8 8.8 0 0 0-11.2 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.38 17.86a11.6 11.6 0 0 0-14.8 0"></svg:path><svg:circle cx="23.99" cy="26.76" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsComPhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

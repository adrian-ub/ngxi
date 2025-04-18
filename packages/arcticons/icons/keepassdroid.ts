import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepassdroidIcon],svg[arcticons-keepassdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="33.04" height="23.12" x="7.48" y="18.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 26a2.62 2.62 0 0 1 1.59 4.7l1.24 4.3h-5.66l1.24-4.3A2.62 2.62 0 0 1 24 26m-10.93-7.11v-4.58a10.93 10.93 0 0 1 21.86 0v4.58M7.48 30.45h12.21m8.62 0h12.21"></svg:path>`,
})
export class ArcticonsKeepassdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

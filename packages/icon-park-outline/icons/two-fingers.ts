import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTwoFingersIcon],svg[icon-park-outline-two-fingers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M12.566 27.182Q10 28.941 10 33c0 4.06 4.975 11 9.462 11h11.48C35.332 44 38 40.15 38 37.06V24.01a3 3 0 0 0-3-3h-.01A2.99 2.99 0 0 0 32 24"></svg:path><svg:path d="M13.981 29.445v-18.44a3 3 0 0 1 3.006-2.997a3.014 3.014 0 0 1 3.006 3.015v13.569"></svg:path><svg:path stroke-linejoin="round" d="M19.993 24.008V7.015a3.016 3.016 0 0 1 6.03 0v16.993"></svg:path><svg:path stroke-linejoin="round" d="M26 23.716v-2.713a3 3 0 0 1 6 0v3"></svg:path></svg:g>`,
})
export class IconParkOutlineTwoFingersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

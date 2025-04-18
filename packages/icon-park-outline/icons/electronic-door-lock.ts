import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineElectronicDoorLockIcon],svg[icon-park-outline-electronic-door-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="26" height="40" x="6" y="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="24" height="8" x="20" y="30" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="4"></svg:rect><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="24" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineElectronicDoorLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

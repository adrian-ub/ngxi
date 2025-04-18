import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneElectronicDoorLockIcon],svg[icon-park-twotone-electronic-door-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTElectronicDoorLock0"><svg:g fill="none"><svg:rect width="26" height="40" x="6" y="4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="24" height="8" x="20" y="30" fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="4"></svg:rect><svg:circle cx="12" cy="12" r="2" fill="#fff"></svg:circle><svg:circle cx="12" cy="18" r="2" fill="#fff"></svg:circle><svg:circle cx="12" cy="24" r="2" fill="#fff"></svg:circle><svg:circle cx="19" cy="12" r="2" fill="#fff"></svg:circle><svg:circle cx="19" cy="18" r="2" fill="#fff"></svg:circle><svg:circle cx="19" cy="24" r="2" fill="#fff"></svg:circle><svg:circle cx="26" cy="12" r="2" fill="#fff"></svg:circle><svg:circle cx="26" cy="18" r="2" fill="#fff"></svg:circle><svg:circle cx="26" cy="24" r="2" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTElectronicDoorLock0)"></svg:path>`,
})
export class IconParkTwotoneElectronicDoorLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

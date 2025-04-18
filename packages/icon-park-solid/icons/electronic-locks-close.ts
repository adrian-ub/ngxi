import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidElectronicLocksCloseIcon],svg[icon-park-solid-electronic-locks-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSElectronicLocksClose0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="18" x="12" y="20" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M18 20v-6c0-3.682 2.686-6 6-6s6 2.318 6 6v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 28v2"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 18v12m36-12v12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSElectronicLocksClose0)"></svg:path>`,
})
export class IconParkSolidElectronicLocksCloseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

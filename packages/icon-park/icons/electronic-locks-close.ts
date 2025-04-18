import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkElectronicLocksCloseIcon],svg[icon-park-electronic-locks-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="18" x="12" y="20" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M18 20V14C18 10.3181 20.6863 8 24 8C27.3137 8 30 10.3181 30 14V20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 18V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 18V30"></svg:path></svg:g>`,
})
export class IconParkElectronicLocksCloseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

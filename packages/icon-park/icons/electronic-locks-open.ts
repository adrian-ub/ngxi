import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkElectronicLocksOpenIcon],svg[icon-park-electronic-locks-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="18" x="12" y="20" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M18 20V14C18 10.3181 20.6863 8 24 8C25.8493 8 27.5032 8.72195 28.6038 10C29.0889 10.5634 29.4666 11.2348 29.7061 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 18V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 18V30"></svg:path></svg:g>`,
})
export class IconParkElectronicLocksOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAirConditioningIcon],svg[icon-park-air-conditioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="20" x="4" y="8" rx="2"></svg:rect><svg:rect width="24" height="8" x="12" y="20" fill="#2F88FF"></svg:rect><svg:path d="M32 14H36"></svg:path><svg:path d="M24 34V40"></svg:path><svg:path d="M16 36V38"></svg:path><svg:path d="M32 36V38"></svg:path></svg:g>`,
})
export class IconParkAirConditioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingLaptopIcon],svg[icon-park-setting-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 9H11C9.34315 9 8 10.3431 8 12V33H40V26"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"></svg:path><svg:circle cx="35" cy="14" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 21V17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 11V7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28.9378 17.5L32.4019 15.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37.5982 12.5L41.0623 10.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28.9375 10.5L32.4016 12.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37.5982 15.5L41.0623 17.5"></svg:path></svg:g>`,
})
export class IconParkSettingLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryFullIcon],svg[icon-park-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 14H6C4.89543 14 4 14.8954 4 16V32C4 33.1046 4.89543 34 6 34H38C39.1046 34 40 33.1046 40 32V16C40 14.8954 39.1046 14 38 14Z"></svg:path><svg:path fill="#000" d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 21V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 21V27"></svg:path></svg:g>`,
})
export class IconParkBatteryFullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

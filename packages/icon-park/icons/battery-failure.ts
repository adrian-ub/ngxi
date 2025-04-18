import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBatteryFailureIcon],svg[icon-park-battery-failure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="20" x="14" y="44" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2" transform="rotate(-90 14 44)"></svg:rect><svg:path fill="#000" d="M20 6L20 4C20 2.89543 20.8954 2 22 2L26 2C27.1046 2 28 2.89543 28 4L28 6L20 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30V27C26.2091 27 28 24.9853 28 22.5C28 20.0147 26.2091 18 24 18C21.7909 18 20 20.0147 20 22.5"></svg:path><svg:path fill="#fff" stroke="#fff" d="M26 35.5C26 36.6046 25.1046 37.5 24 37.5C22.8954 37.5 22 36.6046 22 35.5C22 34.3954 22.8954 33.5 24 33.5C25.1046 33.5 26 34.3954 26 35.5Z"></svg:path></svg:g>`,
})
export class IconParkBatteryFailureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

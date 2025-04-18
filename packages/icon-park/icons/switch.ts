import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchIcon],svg[icon-park-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 19H5.99998"></svg:path><svg:path d="M30 7L42 19"></svg:path><svg:path d="M6.79897 29H42.799"></svg:path><svg:path d="M6.79895 29L18.799 41"></svg:path></svg:g>`,
})
export class IconParkSwitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

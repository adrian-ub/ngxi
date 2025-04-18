import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUdiscIcon],svg[arcticons-udisc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.855 9.668v5.128m0 8.812v5.703c-.167 5.218-3.998 8.616-9.022 9.022a9.02 9.02 0 0 1-9.022-9.022m0-6.51V9.667M5.5 29.744l24.56-9.47"></svg:path><svg:ellipse cx="37.535" cy="17.854" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.204" ry="1.861" transform="rotate(-18.752 37.535 17.854)"></svg:ellipse>`,
})
export class ArcticonsUdiscIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

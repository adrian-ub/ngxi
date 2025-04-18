import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTreadmillIcon],svg[icon-park-twotone-treadmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTreadmill0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#555" d="M39.75 44H9.31C6.38 44 4 41.62 4 38.69v-5.42c0-1.21 1.06-2.14 2.25-1.99l34.02 4.25c2.13.27 3.73 2.08 3.73 4.22C44 42.1 42.1 44 39.75 44"></svg:path><svg:path d="M16 32L4 4h6.43M6 31l6-8m13-8H9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTreadmill0)"></svg:path>`,
})
export class IconParkTwotoneTreadmillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

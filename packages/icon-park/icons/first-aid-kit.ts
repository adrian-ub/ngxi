import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFirstAidKitIcon],svg[icon-park-first-aid-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 20V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V20"></svg:path><svg:path fill="#2F88FF" d="M5 14H43V20H5V14Z"></svg:path><svg:path fill="#2F88FF" d="M31 8H17V14H31V8Z"></svg:path><svg:path stroke-linecap="round" d="M20 30L28 30"></svg:path><svg:path stroke-linecap="round" d="M24 26V34"></svg:path></svg:g>`,
})
export class IconParkFirstAidKitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

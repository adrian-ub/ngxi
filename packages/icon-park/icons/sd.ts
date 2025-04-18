import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSdIcon],svg[icon-park-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15.4024 5.68299C15.7822 5.24896 16.3308 5 16.9075 5H37C38.1046 5 39 5.89543 39 7V41C39 42.1046 38.1046 43 37 43H11C9.89543 43 9 42.1046 9 41V24H13V18H9V13L15.4024 5.68299Z"></svg:path><svg:path stroke="#fff" d="M33 11V15"></svg:path><svg:path stroke="#fff" d="M21 11V15"></svg:path><svg:path stroke="#fff" d="M27 11V15"></svg:path></svg:g>`,
})
export class IconParkSdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

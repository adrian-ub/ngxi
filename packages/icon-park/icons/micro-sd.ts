import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMicroSdIcon],svg[icon-park-micro-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M13 7C13 5.89543 13.8954 5 15 5H37C38.1046 5 39 5.89543 39 7V41C39 42.1046 38.1046 43 37 43H10C8.89543 43 8 42.1046 8 41V36L13 32V28H8V25L13 19V7Z"></svg:path><svg:path stroke="#fff" d="M32 11V15"></svg:path><svg:path stroke="#fff" d="M20 11V15"></svg:path><svg:path stroke="#fff" d="M26 11V15"></svg:path></svg:g>`,
})
export class IconParkMicroSdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

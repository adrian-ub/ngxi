import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSettingsIcon],svg[icon-park-file-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 4L40 14"></svg:path><svg:circle cx="24" cy="27" r="5" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 19V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 32V35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29.8281 21L27.7068 23.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19.8281 31L17.7068 33.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M18 21L20.1213 23.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 31L30.1213 33.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 27H17.5H19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29 27H30.5H32"></svg:path></svg:g>`,
})
export class IconParkFileSettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

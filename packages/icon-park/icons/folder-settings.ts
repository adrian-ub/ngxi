import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderSettingsIcon],svg[icon-park-folder-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:circle cx="24" cy="28" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 21V24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 32V35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28.8281 23L26.7068 25.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20.8281 31L18.7068 33.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 23L21.1213 25.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 31L29.1213 33.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M17 28H18.5H20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 28H29.5H31"></svg:path></svg:g>`,
})
export class IconParkFolderSettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

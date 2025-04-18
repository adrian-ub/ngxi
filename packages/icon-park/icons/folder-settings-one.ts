import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderSettingsOneIcon],svg[icon-park-folder-settings-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:circle cx="35" cy="35" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 28V31"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 39V42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39.8281 30L37.7068 32.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31.8281 38L29.7068 40.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 30L32.1213 32.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 38L40.1213 40.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 35H29.5H31"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 35H40.5H42"></svg:path></svg:g>`,
})
export class IconParkFolderSettingsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

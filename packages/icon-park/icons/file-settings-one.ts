import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSettingsOneIcon],svg[icon-park-file-settings-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:circle cx="34" cy="36" r="5" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 28V31"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 41V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39.8281 30L37.7068 32.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29.8281 40L27.7068 42.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 30L30.1213 32.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 40L40.1213 42.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26 36H27.5H29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 36H40.5H42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileSettingsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

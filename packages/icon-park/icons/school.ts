import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSchoolIcon],svg[icon-park-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 33C4 31.8954 4.89543 31 6 31H12V24L24 16L36 24V31H42C43.1046 31 44 31.8954 44 33V42C44 43.1046 43.1046 44 42 44H4V33Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 6V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36 11.9998V5.99984C36 5.99984 34.5 8.99984 30 5.99984C25.5 2.99984 24 5.99984 24 5.99984V11.9998C24 11.9998 25.5 8.99984 30 11.9998C34.5 14.9998 36 11.9998 36 11.9998Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 44V31H20L20 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M18 44L30 44"></svg:path></svg:g>`,
})
export class IconParkSchoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

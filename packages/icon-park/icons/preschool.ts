import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPreschoolIcon],svg[icon-park-preschool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 35H41C42.1046 35 43 34.1046 43 33V9C43 7.89543 42.1046 7 41 7H7C5.89543 7 5 7.89543 5 9V33C5 34.1046 5.89543 35 7 35Z"></svg:path><svg:path stroke="#fff" d="M14 14V28"></svg:path><svg:path stroke="#fff" d="M34 14V28"></svg:path><svg:path stroke="#fff" d="M24 17V25"></svg:path><svg:path stroke="#fff" d="M20 21H28"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 41L44 41"></svg:path></svg:g>`,
})
export class IconParkPreschoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

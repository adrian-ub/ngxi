import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChurchOneIcon],svg[icon-park-church-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M24 4V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 8L28 8"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M15 28H9C7.89543 28 7 28.8954 7 30V44"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M33 28H39C40.1046 28 41 28.8954 41 30V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 44L44 44"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15 23L24 15L33 23V44H15V23Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 34V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 44L28 44"></svg:path></svg:g>`,
})
export class IconParkChurchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

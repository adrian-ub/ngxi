import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBlackboardIcon],svg[icon-park-blackboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="24" x="8" y="7" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M4 7H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 41L24 31L33 41"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 13H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 19H28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 25H22"></svg:path></svg:g>`,
})
export class IconParkBlackboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

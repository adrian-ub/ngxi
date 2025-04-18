import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCakeThreeIcon],svg[icon-park-cake-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 34V16C39 14.8954 38.1046 14 37 14H34.3125H26.3438H11C9.89543 14 9 14.8954 9 16V34C9 35.1046 9.89543 36 11 36H37C38.1046 36 39 35.1046 39 34Z"></svg:path><svg:path stroke="#000" d="M6 36H42"></svg:path><svg:path stroke="#000" d="M6 42H42"></svg:path><svg:path stroke="#fff" d="M9 21H15V26H21V21H27V29H33V21H39"></svg:path><svg:path stroke="#000" d="M9 23V19"></svg:path><svg:path stroke="#000" d="M39 23V19"></svg:path><svg:path stroke="#000" d="M33 14V8"></svg:path><svg:path stroke="#000" d="M24 14L24 4"></svg:path><svg:path stroke="#000" d="M15 14L15 8"></svg:path></svg:g>`,
})
export class IconParkCakeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

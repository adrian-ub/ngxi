import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSwipeIcon],svg[icon-park-swipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 15L19.3714 25.5377C20.5 26.5 22.8282 28 25 26C27.2893 23.8918 25.5 21.5 25 21L17 15"></svg:path><svg:path d="M4 8H27L38 18"></svg:path><svg:path d="M9 33L44 33.0193"></svg:path><svg:path d="M9 18V40H44V18H22.0002"></svg:path></svg:g>`,
})
export class IconParkSwipeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

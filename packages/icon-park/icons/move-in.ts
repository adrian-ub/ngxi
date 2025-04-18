import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMoveInIcon],svg[icon-park-move-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 12L24 16L28 12"></svg:path><svg:path d="M24 16V4"></svg:path><svg:path d="M20 36L24 32L28 36"></svg:path><svg:path d="M24 32V44"></svg:path><svg:path d="M36 20L32 24L36 28"></svg:path><svg:path d="M32 24H44"></svg:path><svg:path d="M12 20L16 24L12 28"></svg:path><svg:path d="M16 24H4"></svg:path><svg:path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z"></svg:path></svg:g>`,
})
export class IconParkMoveInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

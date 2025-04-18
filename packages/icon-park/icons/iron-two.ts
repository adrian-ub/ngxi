import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIronTwoIcon],svg[icon-park-iron-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 40H44L42 24H20C11.1634 24 4 31.1634 4 40Z"></svg:path><svg:path stroke="#000" d="M16 8H40L42 24"></svg:path><svg:path stroke="#fff" d="M17 32H19"></svg:path></svg:g>`,
})
export class IconParkIronTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

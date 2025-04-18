import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHomeTwoIcon],svg[icon-park-home-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 44V20L24 4L4 20L4 44H16V26H32V44H44Z"></svg:path><svg:path stroke-linecap="round" d="M24 44V34"></svg:path></svg:g>`,
})
export class IconParkHomeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

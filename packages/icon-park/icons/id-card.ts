import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIdCardIcon],svg[icon-park-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M36 16H28V24H36V16Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 32H36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 16H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 24H18"></svg:path></svg:g>`,
})
export class IconParkIdCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

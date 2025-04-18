import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangularVertebraIcon],svg[icon-park-rectangular-vertebra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 9L24 4L36 9L44 38L24 44L4 38L12 9Z"></svg:path><svg:path d="M24 44L24 14"></svg:path><svg:path d="M36 9L24 14"></svg:path><svg:path d="M12 9L24 14"></svg:path><svg:path d="M5 38L24 32"></svg:path><svg:path d="M44 38L24 32"></svg:path></svg:g>`,
})
export class IconParkRectangularVertebraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

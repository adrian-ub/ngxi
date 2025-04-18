import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAddThreeIcon],svg[icon-park-add-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 32L24 16"></svg:path><svg:path d="M42 27L42 21"></svg:path><svg:path d="M6 27L6 21"></svg:path><svg:path d="M14 6H8C6.89543 6 6 6.89543 6 8V14"></svg:path><svg:path d="M34 6H40C41.1046 6 42 6.89543 42 8V14"></svg:path><svg:path d="M34 42H40C41.1046 42 42 41.1046 42 40V34"></svg:path><svg:path d="M14 42H8C6.89543 42 6 41.1046 6 40V34"></svg:path><svg:path d="M27 6H21"></svg:path><svg:path d="M32 24L16 24"></svg:path><svg:path d="M27 42H21"></svg:path></svg:g>`,
})
export class IconParkAddThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

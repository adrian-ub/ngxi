import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBridgeTwoIcon],svg[icon-park-bridge-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M8 13C8 13 14 23 24 23C34 23 40 13 40 13"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 10V38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 10V38"></svg:path><svg:path stroke-linecap="round" d="M4 30.5C4 30.5 16.1877 29.9026 24 30C31.8196 30.0975 44 31 44 31"></svg:path><svg:path stroke-linecap="round" d="M16 21V30"></svg:path><svg:path stroke-linecap="round" d="M24 23L24 30"></svg:path><svg:path stroke-linecap="round" d="M32 21L32 30"></svg:path><svg:path stroke-linecap="round" d="M8 13L4 18"></svg:path><svg:path stroke-linecap="round" d="M44 18L40 13"></svg:path></svg:g>`,
})
export class IconParkBridgeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

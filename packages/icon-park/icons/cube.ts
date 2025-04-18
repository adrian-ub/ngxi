import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCubeIcon],svg[icon-park-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z"></svg:path><svg:path d="M41 14L24 24"></svg:path><svg:path d="M7 14L24 24"></svg:path><svg:path d="M24 44V24"></svg:path><svg:path d="M32 19L32 39"></svg:path><svg:path d="M41 24L24 34"></svg:path><svg:path d="M24 34L7 24"></svg:path><svg:path d="M16 39L16 19"></svg:path><svg:path d="M32 9L16 19"></svg:path><svg:path d="M32 19L16 9"></svg:path></svg:g>`,
})
export class IconParkCubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

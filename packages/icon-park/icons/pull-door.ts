import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPullDoorIcon],svg[icon-park-pull-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 8V40L24.2 44V4L6 8Z"></svg:path><svg:path stroke="#000" d="M24.2002 8H42.0002V40H24.2002"></svg:path><svg:path stroke="#fff" d="M18 22V26"></svg:path></svg:g>`,
})
export class IconParkPullDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

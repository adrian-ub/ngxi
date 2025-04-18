import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGhostIcon],svg[icon-park-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44L12 40L16 44L20 38L24 44L28 38L32 44L36 40L40 44V20C40 11.1634 32.8366 4 24 4C15.1634 4 8 11.1634 8 20V44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 20H21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 20H33"></svg:path></svg:g>`,
})
export class IconParkGhostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

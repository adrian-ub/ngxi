import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSlideTwoIcon],svg[icon-park-slide-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M4 8H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M8 8H40V34H8V8Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M31 18L34 21L31 24"></svg:path><svg:path stroke="#fff" d="M17 24L14 21L17 18"></svg:path><svg:path stroke="#000" d="M16 42L24 34L32 42"></svg:path></svg:g>`,
})
export class IconParkSlideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

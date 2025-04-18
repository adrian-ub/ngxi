import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCoordinateSystemIcon],svg[icon-park-coordinate-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 12L38 20V36L24 44L10 36V20L24 12Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 6V12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10 20L24 28L38 20"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 36L44 39"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 39L10 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28V44"></svg:path><svg:path stroke="#000" d="M31 16L38 20V28M17 16L10 20V28M17 40L24 44L31 40"></svg:path></svg:g>`,
})
export class IconParkCoordinateSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

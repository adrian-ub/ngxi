import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMailIcon],svg[icon-park-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 39H44V24V9H24H4V24V39Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 9L24 24L44 9"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 9H4V24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 24V9H24"></svg:path></svg:g>`,
})
export class IconParkMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailDelectIcon],svg[icon-park-email-delect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path><svg:path fill="#2F88FF" d="M32 31H42L40 41H34L32 31Z"></svg:path><svg:path d="M36 31L38 27"></svg:path></svg:g>`,
})
export class IconParkEmailDelectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

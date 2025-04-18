import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageSecurityIcon],svg[icon-park-message-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 37H21L11 42V37H4V7H44V18"></svg:path><svg:path fill="#2F88FF" d="M29 25.2C29 24.1333 36 22 36 22C36 22 43 24.1333 43 25.2C43 33.7333 36 38 36 38C36 38 29 33.7333 29 25.2Z"></svg:path><svg:path d="M12 15H15L18 15"></svg:path><svg:path d="M12 21H18L24 21"></svg:path></svg:g>`,
})
export class IconParkMessageSecurityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

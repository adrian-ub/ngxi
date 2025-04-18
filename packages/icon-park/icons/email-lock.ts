import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailLockIcon],svg[icon-park-email-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path><svg:rect width="12" height="8" x="31" y="33" fill="#2F88FF"></svg:rect><svg:path d="M40 33V30C40 28.3431 38.6569 27 37 27C35.3431 27 34 28.3431 34 30V33"></svg:path></svg:g>`,
})
export class IconParkEmailLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

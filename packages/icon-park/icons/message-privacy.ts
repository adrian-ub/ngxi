import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMessagePrivacyIcon],svg[icon-park-message-privacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 37H21L11 42V37H4V7H44V18"></svg:path><svg:rect width="14" height="8" x="30" y="27" fill="#2F88FF"></svg:rect><svg:path d="M40 27V24C40 22.3431 38.6569 21 37 21C35.3431 21 34 22.3431 34 24V27"></svg:path><svg:path d="M12 15H15L18 15"></svg:path><svg:path d="M12 21H18L24 21"></svg:path></svg:g>`,
})
export class IconParkMessagePrivacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

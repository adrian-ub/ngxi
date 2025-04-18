import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneBoothIcon],svg[icon-park-phone-booth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="9" x="14" y="34" fill="#2F88FF"></svg:rect><svg:rect width="20" height="6" x="14" y="4" fill="#2F88FF"></svg:rect><svg:path d="M14 10V34"></svg:path><svg:path d="M20 10V34"></svg:path><svg:path d="M22 16V20"></svg:path><svg:path d="M32 26L14 26"></svg:path><svg:path d="M34 10V34"></svg:path><svg:path d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkPhoneBoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

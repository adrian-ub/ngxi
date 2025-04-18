import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSecurityStallIcon],svg[icon-park-security-stall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="16" height="15" x="16" y="29" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:rect width="24" height="6" x="12" y="4" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:path d="M16 10V29"></svg:path><svg:path d="M32 10V29"></svg:path><svg:path stroke-linejoin="round" d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkSecurityStallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

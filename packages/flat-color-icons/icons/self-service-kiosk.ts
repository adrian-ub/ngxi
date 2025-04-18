import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsSelfServiceKioskIcon],svg[flat-color-icons-self-service-kiosk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546E7A" d="M44 30H4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4z"></svg:path><svg:path fill="#64B5F6" d="M40 27H8c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1h32c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1"></svg:path><svg:path fill="#78909C" d="M40 41H8c-2.2 0-4-1.8-4-4v-7h40v7c0 2.2-1.8 4-4 4"></svg:path><svg:g fill="#37474F"><svg:path d="M27 34h12v2H27zM9 34h12v2H9z"></svg:path><svg:path d="M18 35c0 1.1-1.3 2-3 2s-3-.9-3-2z"></svg:path></svg:g>`,
})
export class FlatColorIconsSelfServiceKioskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

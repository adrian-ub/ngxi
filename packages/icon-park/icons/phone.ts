import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneIcon],svg[icon-park-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 37H26"></svg:path></svg:g>`,
})
export class IconParkPhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

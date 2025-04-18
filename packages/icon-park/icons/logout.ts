import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLogoutIcon],svg[icon-park-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.9917 6H6V42H24"></svg:path><svg:path d="M33 33L42 24L33 15"></svg:path><svg:path d="M16 23.9917H42"></svg:path></svg:g>`,
})
export class IconParkLogoutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

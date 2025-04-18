import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkParkingIcon],svg[icon-park-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C24 44 40 32 40 19C40 10.7157 32.8366 4 24 4C15.1634 4 8 10.7157 8 19C8 32 24 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 14V30"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M21 14H27C29.2091 14 31 15.7909 31 18C31 20.2091 29.2091 22 27 22H21V14Z"></svg:path></svg:g>`,
})
export class IconParkParkingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkQiyehaoIcon],svg[icon-park-qiyehao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 19L14.863 12.0858C12.1994 10.6839 9 12.6154 9 15.6255V30"></svg:path><svg:path d="M9 30L18 23V14"></svg:path><svg:path d="M11 12L20 5L36 13L28 19"></svg:path><svg:path d="M20 29L33.137 35.9142C35.8006 37.3161 39 35.3846 39 32.3745V18"></svg:path><svg:path d="M39 18L30 25V34"></svg:path><svg:path d="M37 36L28 43L12 35L20 29"></svg:path></svg:g>`,
})
export class IconParkQiyehaoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

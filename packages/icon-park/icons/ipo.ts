import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIpoIcon],svg[icon-park-ipo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 18.313V7H44V18.313C41.8815 19.068 40.3636 21.1053 40.3636 23.5C40.3636 25.8947 41.8815 27.932 44 28.687V40H4V28.687C6.11853 27.932 7.63636 25.8947 7.63636 23.5C7.63636 21.1053 6.11853 19.068 4 18.313V18.313Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 18V29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18V29"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M18 18H21C22.6569 18 24 19.3431 24 21C24 22.6569 22.6569 24 21 24H18V18Z"></svg:path><svg:ellipse cx="32" cy="24" fill="#43CCF8" stroke="#fff" rx="3" ry="5"></svg:ellipse></svg:g>`,
})
export class IconParkIpoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

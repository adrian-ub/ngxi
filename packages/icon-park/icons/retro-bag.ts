import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRetroBagIcon],svg[icon-park-retro-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M35 14C35 8.47715 30.0751 4 24 4C17.9249 4 13 8.47715 13 14"></svg:path><svg:path fill="#2F88FF" d="M7 16C7 14.8954 7.89543 14 9 14H39C40.1046 14 41 14.8954 41 16V28C41 29.1046 40.1046 30 39 30H30C28.8954 30 28 29.1046 28 28V28C28 26.8954 27.1046 26 26 26H22C20.8954 26 20 26.8954 20 28V28C20 29.1046 19.1046 30 18 30H9C7.89543 30 7 29.1046 7 28V16Z"></svg:path><svg:path d="M10 30V44H38V30"></svg:path><svg:rect width="8" height="6" x="20" y="26"></svg:rect></svg:g>`,
})
export class IconParkRetroBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCommodityIcon],svg[icon-park-commodity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9.78101 9.75193C9.90612 8.75107 10.7569 8 11.7656 8H36.2344C37.2431 8 38.0939 8.75107 38.219 9.75193L41.719 37.7519C41.8682 38.9456 40.9374 40 39.7344 40H8.26556C7.06257 40 6.1318 38.9456 6.28101 37.7519L9.78101 9.75193Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 18C15 18 17 22 24 22C31 22 33 18 33 18"></svg:path></svg:g>`,
})
export class IconParkCommodityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

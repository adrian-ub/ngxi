import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWeixinPeopleNearbyIcon],svg[icon-park-outline-weixin-people-nearby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="15" cy="10" r="4"></svg:circle><svg:circle cx="33" cy="10" r="4"></svg:circle><svg:path d="M10 20h10l-2 22h-6zm18 0h10l-2 22h-6z"></svg:path></svg:g>`,
})
export class IconParkOutlineWeixinPeopleNearbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

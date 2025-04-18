import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinPeopleNearbyIcon],svg[icon-park-weixin-people-nearby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="15" cy="10" r="4"></svg:circle><svg:circle cx="33" cy="10" r="4"></svg:circle><svg:path d="M10 20H20L18 42H12L10 20Z"></svg:path><svg:path d="M28 20H38L36 42H30L28 20Z"></svg:path></svg:g>`,
})
export class IconParkWeixinPeopleNearbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

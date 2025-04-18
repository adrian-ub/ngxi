import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGongfuIcon],svg[icon-park-gongfu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="22" cy="8" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 18H18V29H11V43"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36.1818 18H26V28.8596L40 43"></svg:path></svg:g>`,
})
export class IconParkGongfuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

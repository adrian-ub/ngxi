import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineVipOneIcon],svg[icon-park-outline-vip-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m4.503 16.366l8.013-8.694A2.13 2.13 0 0 1 14.082 7h19.836a2.13 2.13 0 0 1 1.566.672l8.013 8.694a1.85 1.85 0 0 1-.035 2.572L24.75 40.15a1 1 0 0 1-1.5 0L4.538 18.938a1.85 1.85 0 0 1-.035-2.572"></svg:path><svg:path d="m16 20l8 9l8-9"></svg:path></svg:g>`,
})
export class IconParkOutlineVipOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

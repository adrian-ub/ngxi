import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinSearchIcon],svg[icon-park-weixin-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 16L12.5 17.5"></svg:path><svg:path d="M8 42L14 24"></svg:path><svg:path d="M38 42L21 24"></svg:path><svg:path d="M42 16L22.5 17.5"></svg:path><svg:path d="M20 6L18 13"></svg:path></svg:g>`,
})
export class IconParkWeixinSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWeixinFavoritesIcon],svg[icon-park-outline-weixin-favorites-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m6 14l18-8l18 8M6 14l18 8M6 14v20l18 8m18-28l-18 8m18-8v20l-18 8m0-20v20"></svg:path>`,
})
export class IconParkOutlineWeixinFavoritesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

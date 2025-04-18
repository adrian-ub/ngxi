import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinFavoritesIcon],svg[icon-park-weixin-favorites-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 14L24 6L42 14M6 14L24 22M6 14V34L24 42M42 14L24 22M42 14V34L24 42M24 22V42"></svg:path>`,
})
export class IconParkWeixinFavoritesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

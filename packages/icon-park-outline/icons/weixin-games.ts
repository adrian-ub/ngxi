import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWeixinGamesIcon],svg[icon-park-outline-weixin-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 24L24 6l18 18l-18 18zm18 5v13m-5-18H6m18-5V6m5 18h13"></svg:path><svg:path d="M29 24a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class IconParkOutlineWeixinGamesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

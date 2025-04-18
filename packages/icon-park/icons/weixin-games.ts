import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinGamesIcon],svg[icon-park-weixin-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 24L24 6L42 24L24 42L6 24Z"></svg:path><svg:path d="M24 29V42"></svg:path><svg:path d="M19 24H6"></svg:path><svg:path d="M24 19V6"></svg:path><svg:path d="M29 24H42"></svg:path><svg:path d="M29 24C29 26.7614 26.7614 29 24 29C21.2386 29 19 26.7614 19 24C19 21.2386 21.2386 19 24 19C26.7614 19 29 21.2386 29 24Z"></svg:path></svg:g>`,
})
export class IconParkWeixinGamesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

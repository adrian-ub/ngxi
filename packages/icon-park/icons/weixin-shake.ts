import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinShakeIcon],svg[icon-park-weixin-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 19L29 6L6 29L19 42L42 19Z"></svg:path><svg:path stroke="#fff" d="M16 29L19 32"></svg:path><svg:path stroke="#000" d="M30 42L42 30"></svg:path><svg:path stroke="#000" d="M6 18L18 6"></svg:path></svg:g>`,
})
export class IconParkWeixinShakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

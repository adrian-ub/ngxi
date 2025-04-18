import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOrderIcon],svg[icon-park-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M33.0499 7H38C39.1046 7 40 7.89543 40 9V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42L8 9C8 7.89543 8.89543 7 10 7H16H17V10H31V7H33.0499Z"></svg:path><svg:rect width="14" height="6" x="17" y="4" stroke="#000" stroke-linecap="round"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M26.9996 19L19 27.0012H29.004L21.0003 35.0018"></svg:path></svg:g>`,
})
export class IconParkOrderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

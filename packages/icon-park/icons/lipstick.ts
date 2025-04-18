import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLipstickIcon],svg[icon-park-lipstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="12" height="20" x="29" y="24"></svg:rect><svg:rect width="14" height="20" x="7" y="24"></svg:rect><svg:path fill="#2F88FF" d="M10 11.4545V24H18V4C11.5 4 10 9.63636 10 11.4545Z"></svg:path><svg:path d="M7 32L21 32"></svg:path></svg:g>`,
})
export class IconParkLipstickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

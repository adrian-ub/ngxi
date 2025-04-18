import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBillIcon],svg[icon-park-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V44L31 39L24 44L17 39L10 44V6Z"></svg:path><svg:path stroke="#fff" d="M18 22L30 22"></svg:path><svg:path stroke="#fff" d="M18 30L30 30"></svg:path><svg:path stroke="#fff" d="M18 14L30 14"></svg:path></svg:g>`,
})
export class IconParkBillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

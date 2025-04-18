import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHotPotOneIcon],svg[icon-park-hot-pot-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M24 36C36 36 41 27.9411 41 18H7C7 27.9411 12 36 24 36Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M17 35L14 44H34L31 35"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M29 18L27.8889 4L20.1111 4L19 18"></svg:path><svg:path stroke="#fff" d="M15 25C15 25 15.0703 26.0703 16 27C16.9297 27.9297 18 28 18 28"></svg:path></svg:g>`,
})
export class IconParkHotPotOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

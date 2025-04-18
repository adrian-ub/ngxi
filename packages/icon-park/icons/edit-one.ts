import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEditOneIcon],svg[icon-park-edit-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M29 4H9C7.89543 4 7 4.89543 7 6V42C7 43.1046 7.89543 44 9 44H37C38.1046 44 39 43.1046 39 42V20.0046"></svg:path><svg:path d="M13 18H21"></svg:path><svg:path d="M13 28H25"></svg:path><svg:path stroke-linejoin="round" d="M40.9991 6.00098L29.0044 17.9958"></svg:path></svg:g>`,
})
export class IconParkEditOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

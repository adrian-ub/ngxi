import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBankIcon],svg[icon-park-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 17V44H38V17"></svg:path><svg:path d="M5 22L10 17L24 4L38 17L43 22"></svg:path><svg:path d="M19 19L24 25L29 19"></svg:path><svg:path d="M18 31H30"></svg:path><svg:path d="M18 25H30"></svg:path><svg:path d="M24 25V37"></svg:path></svg:g>`,
})
export class IconParkBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

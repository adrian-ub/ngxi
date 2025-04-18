import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTowerOfBabelIcon],svg[icon-park-tower-of-babel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 14.5V4L28 4.00002V13.5"></svg:path><svg:path d="M14 25V15.4619L34 13V23"></svg:path><svg:path d="M11 35V26L37 23V32"></svg:path><svg:path fill="#2F88FF" d="M40 44H8V36L40 32V44Z"></svg:path></svg:g>`,
})
export class IconParkTowerOfBabelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

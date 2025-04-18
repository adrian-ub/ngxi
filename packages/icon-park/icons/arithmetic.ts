import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArithmeticIcon],svg[icon-park-arithmetic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 32.5H42"></svg:path><svg:path d="M28 41.5H42"></svg:path><svg:path d="M6 13H22"></svg:path><svg:path d="M14 5L14 21"></svg:path><svg:path d="M42 5L6 41"></svg:path></svg:g>`,
})
export class IconParkArithmeticIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

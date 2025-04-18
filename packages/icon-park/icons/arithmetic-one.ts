import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArithmeticOneIcon],svg[icon-park-arithmetic-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 31.5H42"></svg:path><svg:path d="M28 39.5H42"></svg:path><svg:path d="M7.34281 40.6568L18.6565 29.3431"></svg:path><svg:path d="M7.3428 29.3433L18.6565 40.657"></svg:path><svg:path d="M28 12.5H42"></svg:path><svg:path d="M6 12.5H20"></svg:path><svg:path d="M13 5.5V19.5"></svg:path></svg:g>`,
})
export class IconParkArithmeticOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoDimensionalCodeTwoIcon],svg[icon-park-two-dimensional-code-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M18 6H6V18H18V6Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M18 30H6V42H18V30Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 6H30V18H42V6Z"></svg:path><svg:path stroke-linecap="round" d="M24 6V18"></svg:path><svg:path stroke-linecap="round" d="M42 24H6"></svg:path><svg:path stroke-linecap="round" d="M34 30V42"></svg:path><svg:path stroke-linecap="round" d="M42 30V42"></svg:path><svg:path stroke-linecap="round" d="M26 30V42"></svg:path></svg:g>`,
})
export class IconParkTwoDimensionalCodeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

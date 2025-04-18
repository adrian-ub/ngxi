import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBankCardTwoIcon],svg[icon-park-bank-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M44 18V8H4V18"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 18H4V40H44V18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 29H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 29H22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 29H30"></svg:path></svg:g>`,
})
export class IconParkBankCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

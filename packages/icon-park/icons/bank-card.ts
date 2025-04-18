import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBankCardIcon],svg[icon-park-bank-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="square" d="M4 16H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 32H36"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 10V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 10V26"></svg:path></svg:g>`,
})
export class IconParkBankCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

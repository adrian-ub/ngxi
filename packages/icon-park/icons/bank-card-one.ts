import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBankCardOneIcon],svg[icon-park-bank-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M14 13V9C14 7.89543 14.8954 7 16 7H42C43.1046 7 44 7.89543 44 9V27C44 28.1046 43.1046 29 42 29H40"></svg:path><svg:rect width="30" height="22" x="4" y="19" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M4 28L34 28"></svg:path><svg:path stroke="#000" d="M34 23L34 35"></svg:path><svg:path stroke="#000" d="M4 23L4 35"></svg:path><svg:path stroke="#fff" d="M11 34L19 34"></svg:path><svg:path stroke="#fff" d="M25 34L27 34"></svg:path></svg:g>`,
})
export class IconParkBankCardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

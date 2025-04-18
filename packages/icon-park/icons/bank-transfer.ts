import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBankTransferIcon],svg[icon-park-bank-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="10" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M4 20H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 17V23"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 17V23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 29L37 29"></svg:path></svg:g>`,
})
export class IconParkBankTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

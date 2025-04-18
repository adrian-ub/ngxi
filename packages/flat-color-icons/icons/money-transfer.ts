import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsMoneyTransferIcon],svg[flat-color-icons-money-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909C" d="M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#AED581" d="M14 1h20v31H14z"></svg:path><svg:g fill="#558B2F"><svg:path d="M13 0v33h22V0zm20 31H15V2h18z"></svg:path><svg:path d="M34 3c0 1.7-.3 3-2 3s-3-1.3-3-3s1.3-2 3-2s2 .3 2 2M16 1c1.7 0 3 .3 3 2s-1.3 3-3 3s-2-1.3-2-3s.3-2 2-2"></svg:path><svg:circle cx="24" cy="8" r="2"></svg:circle><svg:circle cx="24" cy="20" r="6"></svg:circle></svg:g><svg:path fill="#CFD8DC" d="M40 41H8c-2.2 0-4-1.8-4-4V17l20 13l20-13v20c0 2.2-1.8 4-4 4"></svg:path>`,
})
export class FlatColorIconsMoneyTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

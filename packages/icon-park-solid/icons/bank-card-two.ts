import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBankCardTwoIcon],svg[icon-park-solid-bank-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBankCardTwo0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M44 18V8H4v10"></svg:path><svg:path fill="#fff" stroke="#fff" d="M44 18H4v22h40z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 29h2m6 0h2m6 0h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBankCardTwo0)"></svg:path>`,
})
export class IconParkSolidBankCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBankIcon],svg[marketeq-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 18.75v25m-12.5-25v25zm25 0v25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5m-37.5-25L25 6.25l18.75 12.5z"></svg:path></svg:g>`,
})
export class MarketeqBankIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

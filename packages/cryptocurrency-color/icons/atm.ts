import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorAtmIcon],svg[cryptocurrency-color-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#346fce"></svg:circle><svg:path fill="#fff" d="m20.16 18.706l.956 1.797a4.37 4.37 0 0 1-1.806 5.908l-.124.066a4.37 4.37 0 0 1-5.909-1.806l-3.223-6.062a4.37 4.37 0 0 1 1.592-5.787l-.956-1.797a4.37 4.37 0 0 1 1.807-5.908l.124-.066a4.37 4.37 0 0 1 5.908 1.806l3.223 6.062a4.37 4.37 0 0 1-1.591 5.787zm0 0l-2.267-4.265a4.37 4.37 0 0 0-5.908-1.806l-.124.065q-.11.06-.215.122l2.268 4.265a4.37 4.37 0 0 0 5.908 1.806l.124-.065q.11-.06.215-.122z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorAtmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

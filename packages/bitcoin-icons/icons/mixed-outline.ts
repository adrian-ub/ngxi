import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMixedOutlineIcon],svg[bitcoin-icons-mixed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 16.8c6.708.082 6.496-10.932 15.96-9.4"></svg:path><svg:path d="M16.57 4L20 7.44l-3.432 3.44m.002 2.32l3.39 3.6l-3.39 3.2"></svg:path><svg:path d="M4 7.2c6.887-.124 6.381 11.044 15.56 9.6"></svg:path></svg:g>`,
})
export class BitcoinIconsMixedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNodeFilledIcon],svg[bitcoin-icons-node-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.31 4.815l7.496 7.496l-7.495 7.495l-7.496-7.495zm-5.373 7.496l5.374 5.374l5.374-5.374l-5.374-5.374z" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="5.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="18.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="5.5" cy="12" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="18.5" cy="12" r="2.5" fill="currentColor"></svg:circle>`,
})
export class BitcoinIconsNodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

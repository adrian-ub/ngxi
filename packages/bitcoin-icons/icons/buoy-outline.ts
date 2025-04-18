import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBuoyOutlineIcon],svg[bitcoin-icons-buoy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8.5"></svg:circle><svg:circle cx="12" cy="12" r="5"></svg:circle><svg:path d="m19 7l-2.5 2.5M17 5l-2.5 2.5m-5 9L7 19m.5-4.5L5 17m4.5-9.5L7 5m.5 4.5L5 7m12 12l-2.5-2.5m4.5.5l-2.5-2.5"></svg:path></svg:g>`,
})
export class BitcoinIconsBuoyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

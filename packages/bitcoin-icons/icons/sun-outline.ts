import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSunOutlineIcon],svg[bitcoin-icons-sun-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4Z"></svg:path><svg:path stroke-linecap="round" d="M12 3.5v2m8.5 6.5h-2m-13 0h-2m8.5 6.5v2m4.5-13L18 6M6 18l1.5-1.5M6 6l1.5 1.5m9 9L18 18"></svg:path></svg:g>`,
})
export class BitcoinIconsSunOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

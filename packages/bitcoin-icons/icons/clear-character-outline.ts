import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsClearCharacterOutlineIcon],svg[bitcoin-icons-clear-character-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 5.5l-3.447 5.29a1.64 1.64 0 0 0-.043 1.723L7.5 18.5h11.36a1.64 1.64 0 0 0 1.64-1.641V7.14a1.64 1.64 0 0 0-1.64-1.641zm2.5 3l7 7m-7 0l6.93-7"></svg:path>`,
})
export class BitcoinIconsClearCharacterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTipJarOutlineIcon],svg[bitcoin-icons-tip-jar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="12" height="7.5" x="6" y="13" rx="1"></svg:rect><svg:path d="M7 12a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1H7z"></svg:path><svg:circle cx="12" cy="6.5" r="3"></svg:circle><svg:path stroke-linecap="round" d="m12.242 5.53l-.484 1.94"></svg:path></svg:g>`,
})
export class BitcoinIconsTipJarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

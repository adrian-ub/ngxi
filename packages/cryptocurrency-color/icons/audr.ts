import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorAudrIcon],svg[cryptocurrency-color-audr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#34318A"></svg:circle><svg:path fill="#FFF" d="m10.854 13.264l3.61 1.92l1.92-.96l-4.589-2.486V7.36l8.823 4.58l1.92-.96l-11.3-5.924A.845.845 0 0 0 10 5.805v6.067c.003.587.332 1.124.854 1.392m13.757-1.018a.845.845 0 0 0-.96-.153l-12.797 6.643c-.525.27-.855.811-.854 1.402v6.057a.845.845 0 0 0 1.238.749l12.768-6.624c.533-.276.864-.83.855-1.43v-6.048a.84.84 0 0 0-.25-.596m-1.536 6.538l-11.28 5.856v-4.378l11.28-5.856z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorAudrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorDtrIcon],svg[cryptocurrency-color-dtr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#121747"></svg:circle><svg:g fill="#fff" fill-rule="nonzero"><svg:path d="M18.032 22.87c0 1.145-.92 2.074-2.056 2.074s-2.055-.929-2.055-2.075V9.08c0-1.145.92-2.074 2.055-2.074s2.056.929 2.056 2.075zm-6.92.005a2.07 2.07 0 0 1-1.015 1.82a2.03 2.03 0 0 1-2.068 0a2.07 2.07 0 0 1-1.014-1.82v-3.1a2.07 2.07 0 0 1 1.014-1.82a2.03 2.03 0 0 1 2.068 0a2.07 2.07 0 0 1 1.014 1.82z"></svg:path><svg:path d="M24.956 17.4c0 1.145-.92 2.074-2.056 2.074s-2.056-.93-2.056-2.075v-5.233c0-1.146.92-2.075 2.056-2.075s2.056.929 2.056 2.075z" opacity=".5"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorDtrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

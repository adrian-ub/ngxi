import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyDtrIcon],svg[cryptocurrency-dtr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m2.032-9.13V9.08c0-1.146-.92-2.075-2.056-2.075s-2.055.929-2.055 2.075v13.79c0 1.145.92 2.074 2.055 2.074s2.056-.929 2.056-2.075zm-6.92.005v-3.1a2.07 2.07 0 0 0-1.015-1.82a2.03 2.03 0 0 0-2.068 0a2.07 2.07 0 0 0-1.014 1.82v3.1a2.07 2.07 0 0 0 1.014 1.82c.639.376 1.43.376 2.068 0a2.07 2.07 0 0 0 1.014-1.82zM24.955 17.4v-5.233c0-1.146-.92-2.075-2.056-2.075s-2.056.929-2.056 2.075V17.4c0 1.146.92 2.075 2.056 2.075s2.056-.93 2.056-2.075"></svg:path><svg:path fill-rule="nonzero" d="M24.956 17.4c0 1.145-.92 2.074-2.056 2.074s-2.056-.93-2.056-2.075v-5.233c0-1.146.92-2.075 2.056-2.075s2.056.929 2.056 2.075z" opacity=".5"></svg:path></svg:g>`,
})
export class CryptocurrencyDtrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

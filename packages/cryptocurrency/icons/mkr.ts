import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyMkrIcon],svg[cryptocurrency-mkr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16S7.163 0 16 0M6 11.81v9.346h1.558v-8.045l6.101 4.592v3.453h1.558V17.38a.91.91 0 0 0-.363-.726l-7.399-5.569A.909.909 0 0 0 6 11.81m19.99 0a.909.909 0 0 0-1.455-.726l-7.4 5.569a.91.91 0 0 0-.362.726v3.777h1.558v-3.453l6.1-4.592v8.045h1.559z"></svg:path>`,
})
export class CryptocurrencyMkrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

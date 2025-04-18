import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorMkrIcon],svg[cryptocurrency-color-mkr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#1AAB9B"></svg:circle><svg:path fill="#FFF" d="M7.558 21.156v-8.045l6.101 4.592v3.453h1.558V17.38a.91.91 0 0 0-.363-.726l-7.399-5.569A.909.909 0 0 0 6 11.81v9.346zm16.874 0v-8.045l-6.101 4.592v3.453h-1.558V17.38c0-.286.134-.555.362-.726l7.4-5.569a.909.909 0 0 1 1.455.726v9.346h-1.558z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorMkrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

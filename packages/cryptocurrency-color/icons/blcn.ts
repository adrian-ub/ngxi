import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorBlcnIcon],svg[cryptocurrency-color-blcn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#2aabe4"></svg:circle><svg:path fill="#fff" d="M7.9 7h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9H7.9a.9.9 0 0 1-.9-.9V7.9a.9.9 0 0 1 .9-.9m10 0h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9h-6.2a.9.9 0 0 1-.9-.9V7.9a.9.9 0 0 1 .9-.9m0 10h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9h-6.2a.9.9 0 0 1-.9-.9v-6.2a.9.9 0 0 1 .9-.9m-10 0h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9H7.9a.9.9 0 0 1-.9-.9v-6.2a.9.9 0 0 1 .9-.9"></svg:path></svg:g>`,
})
export class CryptocurrencyColorBlcnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

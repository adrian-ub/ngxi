import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorOmniIcon],svg[cryptocurrency-color-omni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#1c347a"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M10.065 6.888a10.9 10.9 0 0 0-3.19 3.196V6.888zm15.004 3.11a10.9 10.9 0 0 0-3.134-3.11h3.134zm-3.088 15.084a10.9 10.9 0 0 0 3.088-3.08v3.08zM6.875 21.916a10.9 10.9 0 0 0 3.144 3.166H6.875zM26 16c0 5.514-4.486 10-10 10S6 21.514 6 16S10.486 6 16 6s10 4.486 10 10m-10 7.292c4.02 0 7.292-3.271 7.292-7.292c0-4.02-3.271-7.292-7.292-7.292c-4.02 0-7.292 3.271-7.292 7.292c0 4.02 3.271 7.292 7.292 7.292"></svg:path></svg:g>`,
})
export class CryptocurrencyColorOmniIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

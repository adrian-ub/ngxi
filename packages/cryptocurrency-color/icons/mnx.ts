import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorMnxIcon],svg[cryptocurrency-color-mnx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#00ADEF" fill-rule="nonzero"></svg:circle><svg:path fill="#FFF" d="M14.863 26.986C9.32 26.405 5 21.708 5 16S9.32 5.595 14.863 5.014v3.37A7.7 7.7 0 0 0 8.336 16a7.7 7.7 0 0 0 6.527 7.616zM17.038 5c5.23.479 9.403 4.617 9.948 9.837h-3.363a7.7 7.7 0 0 0-6.585-6.474zM27 17.017c-.482 5.29-4.684 9.5-9.962 9.983v-3.363a7.7 7.7 0 0 0 6.606-6.62z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorMnxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

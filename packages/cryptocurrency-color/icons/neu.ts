import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorNeuIcon],svg[cryptocurrency-color-neu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#B3BA00"></svg:circle><svg:g fill="#FFF"><svg:path d="m13.13 10.664l-.13.079L19 20v-9.265L16.004 9zM13 21.165L16.136 23L19 21.328L13 12zm-3-8.809v7.288L12 21V11zM20 21l2-1.387v-7.226L20 11z"></svg:path><svg:path d="M16 4C9.375 4 4 9.375 4 16s5.375 12 12 12s12-5.375 12-12S22.625 4 16 4m-.05 19.62l-6.476-3.84v-7.668l6.477-3.83l6.476 3.83v7.669l-6.476 3.838z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorNeuIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

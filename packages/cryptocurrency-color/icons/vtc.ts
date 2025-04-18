import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorVtcIcon],svg[cryptocurrency-color-vtc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#048657"></svg:circle><svg:path fill="#FFF" fill-rule="nonzero" d="m2.632 16.57l1.95-2.221h6.938l4.263 5.438L26.938 4.334a14 14 0 0 1 1.86 2.04a15 15 0 0 1 1.496 2.446L16.599 27.763q-.389.408-.816.408q-.429 0-.862-.408L6.26 16.569H2.632z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorVtcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

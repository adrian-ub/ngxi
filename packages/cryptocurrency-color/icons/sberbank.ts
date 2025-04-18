import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorSberbankIcon],svg[cryptocurrency-color-sberbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#48B254" fill-rule="nonzero"></svg:circle><svg:path fill="#FFF" d="m22.681 7.368l.945.858l-11.932 6.812l-5.776-3.325l.54-1.073l5.236 2.977zM20.279 6l1.268.644l-9.853 5.632l-4.588-2.602l.782-.938l3.806 2.172L20.28 6zm4.184 3.111l.701.939l-13.47 7.697l-6.505-3.701l.297-1.18l6.208 3.54zm1.943 3.46Q27 14.234 27 16.057q0 1.825-.594 3.54l-.27.725a11.1 11.1 0 0 1-2.348 3.486a10.9 10.9 0 0 1-3.51 2.307Q18.201 27 15.987 27q-2.241 0-4.293-.885a11.3 11.3 0 0 1-3.482-2.307a10.6 10.6 0 0 1-2.348-3.486c-.57-1.35-.865-2.8-.864-4.265v-.724l6.694 3.782l14.118-8.046z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorSberbankIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

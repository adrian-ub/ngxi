import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorIostIcon],svg[cryptocurrency-color-iost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#1c1c1c"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M24.5 11v10L16 26l-8.5-5V11L16 6zm-8.768 5.407l-.79.467l1.476.862l.785-.463l2.099 1.235l-3.131 1.84l-6.495-3.786l-.027 1.843l6.526 3.79l6.27-3.687l-3.674-2.162l.74-.437l-1.476-.862l-.735.434l-1.03-.606l.901-.533l-1.476-.863l-.897.53l-1.754-1.032l3.13-1.841l4.328 2.529l1.586-.938l-5.917-3.438l-6.27 3.688l3.329 1.959l-.628.37l1.476.863l.623-.368z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorIostIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

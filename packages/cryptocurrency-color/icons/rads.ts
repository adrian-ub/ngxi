import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorRadsIcon],svg[cryptocurrency-color-rads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#9d4bef"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M11.47 7.661a3.808 3.808 0 1 1 0 7.616a3.808 3.808 0 0 1 0-7.616m3.807 12.87a3.808 3.808 0 1 1-3.808-3.808a5.253 5.253 0 0 0 5.253-5.253a3.808 3.808 0 1 1 3.808 3.808a5.253 5.253 0 0 0-5.252 5.253zm5.253 3.808a3.808 3.808 0 1 1 0-7.616a3.808 3.808 0 0 1 0 7.616m0-2.66a1.148 1.148 0 1 0 0-2.296a1.148 1.148 0 0 0 0 2.296m-9.06 0a1.148 1.148 0 1 0 0-2.296a1.148 1.148 0 0 0 0 2.296m9.06-9.062a1.148 1.148 0 1 0 0-2.296a1.148 1.148 0 0 0 0 2.296m-9.06 0a1.148 1.148 0 1 0 0-2.296a1.148 1.148 0 0 0 0 2.296"></svg:path></svg:g>`,
})
export class CryptocurrencyColorRadsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

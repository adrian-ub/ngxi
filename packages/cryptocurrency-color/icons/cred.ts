import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorCredIcon],svg[cryptocurrency-color-cred-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#37e8a3"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="m12.136 15.966l3.482 3.493l9.13-9.191L26 11.538L15.618 22l-4.735-4.763zm2.11-.31L19.864 10l1.253 1.27l-5.617 5.66zm-2.276 4.83l-1.236 1.246L6 16.97l1.251-1.27z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorCredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

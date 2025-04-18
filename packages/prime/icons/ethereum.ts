import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeEthereumIcon],svg[prime-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.747 12.16L12 15.24l-4.75-3.08L12 3.5zM12 16.23l-4.75-3.08L12 20.5l4.75-7.351z"></svg:path>`,
})
export class PrimeEthereumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

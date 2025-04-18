import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorRdnIcon],svg[cryptocurrency-color-rdn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#2A2A2A"></svg:circle><svg:path fill="#FFF" d="M10 6.006h8.111c.098-.03.148.06.212.11a15 15 0 0 1 2.046 2.39a15.2 15.2 0 0 1 1.972 3.946c.482 1.484.71 3.054.65 4.614h-4.135a5 5 0 0 0 .022-.624c-.043-1.471-.497-2.914-1.212-4.192c-.765-1.369-1.833-2.55-3.047-3.531c-1.322-1.069-2.81-1.913-4.36-2.595c-.086-.04-.176-.072-.259-.118m3.002 7.327a4715 4715 0 0 1 4.155 7.533c.333.606.67 1.21 1 1.817C16.436 23.785 14.72 24.897 13 26V13.333z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorRdnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

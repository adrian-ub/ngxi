import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorTntIcon],svg[cryptocurrency-color-tnt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#ff4081"></svg:circle><svg:path fill="#fff" d="M13.89 21.503L14.048 25s1.875-.318 3.828 0l.156-3.497zM11.626 18.8s5.469-.477 8.672 0l.312-3.815a59 59 0 0 0-9.14 0zM26 8.944S15.531 6.718 6 9.103l.703 4.371l.86-1.669s8.984-1.351 17.03 0l.782 1.67z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorTntIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

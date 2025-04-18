import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorXmccIcon],svg[cryptocurrency-color-xmcc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#DD0632"></svg:circle><svg:path fill="#FFF" d="M22.682 7h-5.16l-1.534 2.652L14.459 7H9.297L4 16.175l5.129 8.88l3.477-6.019L16 24.896l3.384-5.86l3.485 6.06L28 16.216zM9.122 21.544L6.02 16.178l2.467-4.272l3.1 5.37l-2.466 4.273v-.005zm.384-11.402l.818-1.421h3.091l1.555 2.693l-2.364 4.099zm6.48 11.232l-2.362-4.102l2.364-4.097L17.044 15l1.31 2.273l-2.366 4.097l-.002.005zm1.017-9.96l1.558-2.693h3.091l.828 1.42l-3.12 5.372zm7.968 6.537l-2.093 3.631l-2.488-4.32l3.1-5.359l.836 1.44l1.653 2.863z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorXmccIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

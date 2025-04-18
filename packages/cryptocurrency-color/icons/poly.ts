import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorPolyIcon],svg[cryptocurrency-color-poly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#4c5a95"></svg:circle><svg:path fill="#fff" d="m27 11.263l-.044-.707l-.218.593l-1.226 1.03l-1.404.209l-.42-.389l1.231-1.633l1.26-.366l-1.364.028l-1.983 1.382l-1.859-.128L18.363 10l-1.542.299l-4.811 3.846l-2.318.717l-.954.931l-1.706.023l-.845 1.51L5 17.654l1.122.147l1.043-1.353l1.612.323l-.03 1.448l-.805 2.084l-.46 1.928l-.495.769l1.256-.266l-.143-.788l1.068-2.118l2.056-.797l.796-1.268l1.345-.94l2.67.375l2.689-1.135l-.455 1.795l-1.196.104l-.341 1.472l1.023-.655l1.696-.707l1.325-1.999l.084-.945l.712.707l2.071 1.249l1.177-.537l-.069-2.639l-.342-1.021l1.538-.375z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorPolyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

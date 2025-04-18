import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyQspIcon],svg[cryptocurrency-qsp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m7.313-16a7.27 7.27 0 0 0-1.18-3.978L25 9.154L22.846 7l-2.868 2.868c-1.146-.745-2.51-1.181-3.978-1.181s-2.832.436-3.978 1.18L9.154 7L7 9.154l2.868 2.868c-.745 1.146-1.181 2.51-1.181 3.978s.437 2.832 1.181 3.978L7 22.846L9.154 25l2.868-2.868c1.146.745 2.51 1.181 3.978 1.181s2.832-.436 3.978-1.181L22.846 25L25 22.846l-2.868-2.868A7.27 7.27 0 0 0 23.313 16M11.5 16c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .653-.143 1.272-.394 1.833l-2.97-2.97l-2.272 2.273l2.97 2.97A4.5 4.5 0 0 1 16 20.5a4.505 4.505 0 0 1-4.5-4.5"></svg:path>`,
})
export class CryptocurrencyQspIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

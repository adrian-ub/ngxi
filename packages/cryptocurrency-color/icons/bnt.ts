import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorBntIcon],svg[cryptocurrency-color-bnt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#000D2B"></svg:circle><svg:path fill="#FFF" d="m15.92 5.88l-4.518 2.647l4.518 2.648l4.603-2.648zm.743 14.134v5.295l6.137-3.501v-5.296zm4.603-9.822v5.296l-4.604 2.648V12.84zm-11.082 5.296l4.604 2.648V12.84l-4.604-2.648zm0 7.174l4.604 2.647v-5.295l-4.604-2.647v5.294z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorBntIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

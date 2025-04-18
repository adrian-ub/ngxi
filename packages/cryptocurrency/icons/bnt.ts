import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyBntIcon],svg[cryptocurrency-bnt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-.08-26.12l-4.518 2.647l4.518 2.648l4.603-2.648zm.743 14.134v5.295l6.137-3.501v-5.296zm4.603-9.822l-4.604 2.648v5.296l4.604-2.648zm-11.082 5.296l4.604 2.648V12.84l-4.604-2.648zm0 7.174l4.604 2.647v-5.295l-4.604-2.647v5.294z"></svg:path>`,
})
export class CryptocurrencyBntIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

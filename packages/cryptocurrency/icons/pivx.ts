import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyPivxIcon],svg[cryptocurrency-pivx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m1.153-20.259H10v2.255h7.153zM23 12.831l-.02-.5c-.225-2.92-2.433-4.831-5.52-4.831h-6.41v2.432l4.543-.014h1.688c1.92 0 3.07 1.076 3.07 2.913c0 1.873-1.161 2.976-3.096 2.976h-5.924V24.5h2.599v-6.274h3.542c3.238 0 5.528-2.187 5.528-5.395"></svg:path>`,
})
export class CryptocurrencyPivxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

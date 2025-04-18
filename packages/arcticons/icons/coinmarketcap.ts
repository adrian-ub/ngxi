import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoinmarketcapIcon],svg[arcticons-coinmarketcap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.935 39.466A21.499 21.499 0 1 1 45.5 24h0c-.182 8.576-9.348 10.014-10.25 1.656l-1.342-8.85l-11.192 14.817l-1.342-15.96l-14.96 20.7"></svg:path>`,
})
export class ArcticonsCoinmarketcapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

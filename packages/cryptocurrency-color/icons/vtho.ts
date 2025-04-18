import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorVthoIcon],svg[cryptocurrency-color-vtho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#2A5284"></svg:circle><svg:g fill="#FFF"><svg:path fill-opacity=".704" d="M20.272 5.058h3.023l-5.682 7.584h5.099l-12.18 14.3l3.94-10.104h-4.45l4.487-11.78z"></svg:path><svg:path d="M20.272 5.058h.182l-5.107 8.713h4.67l-9.485 13.17l3.94-10.103h-4.45l4.487-11.78z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorVthoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

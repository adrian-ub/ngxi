import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorHightIcon],svg[cryptocurrency-color-hight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#117FC0"></svg:circle><svg:path fill="#FFF" d="m26.496 10.332l-8.455 13.94h-5.042l3.875-6.397h-3.851l-4.49 7.404a11.905 11.905 0 0 0 17.96-14.94zM19.114 7.83l-3.67 6.04H19.3l4.274-7.049a11.905 11.905 0 0 0-17.96 14.94l8.452-13.93h5.047z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorHightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

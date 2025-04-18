import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorElecIcon],svg[cryptocurrency-color-elec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#F90"></svg:circle><svg:g fill="#FFF"><svg:path d="m10.76 27.587l12.666-13.303H15.76z"></svg:path><svg:path d="M8 18.27h7.666l7.76-3.986H15.76z"></svg:path><svg:path d="M19.51 4L8 18.27h7.666z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorElecIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

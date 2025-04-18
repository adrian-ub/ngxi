import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorShiftIcon],svg[cryptocurrency-color-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#964B9C"></svg:circle><svg:g fill="#FFF"><svg:path d="m20.507 16.406l-4.472 4.471h8.942z" opacity=".6"></svg:path><svg:path d="M11.528 16.41L16 11.94H7.057l4.472 4.471z" opacity=".7"></svg:path><svg:path d="m16.035 20.878l4.46-4.46l-4.48-4.482l-8.943 8.942l8.942 8.943l8.943-8.943h-.002z" opacity=".4"></svg:path><svg:path d="m16.056 3l-8.937 8.937H16l-4.446 4.446l4.502 4.501l8.942-8.942z" opacity=".8"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorShiftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

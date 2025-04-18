import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorDockIcon],svg[cryptocurrency-color-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#786DBC"></svg:circle><svg:path fill="#FFF" d="m15.931 10.771l-1.629-1.633a1.144 1.144 0 0 1 1.582-1.654l.038.038l3.636 3.636c.447.447.447 1.17 0 1.617l-3.64 3.636a1.143 1.143 0 0 1-1.616-1.616l1.707-1.707a5.695 5.695 0 1 0 4.705 5.63V6.142a1.143 1.143 0 0 1 2.286 0v12.729a8 8 0 1 1-7.07-8.104z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorDockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

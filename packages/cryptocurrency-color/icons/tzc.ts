import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorTzcIcon],svg[cryptocurrency-color-tzc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#374851"></svg:circle><svg:path fill="#fff" d="M17.7 15.4v7.598q.306-.075.6-.173v2.91a10 10 0 0 1-4 .121V15.4h-3.5v-2.8h10.4v2.8zm1.4 10.11V22.5a7.2 7.2 0 1 0-6.2 0v3.01C8.895 24.205 6 20.44 6 16c0-5.523 4.477-10 10-10s10 4.477 10 10c0 4.44-2.895 8.205-6.9 9.51"></svg:path></svg:g>`,
})
export class CryptocurrencyColorTzcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

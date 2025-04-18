import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorTbxIcon],svg[cryptocurrency-color-tbx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#5244D4"></svg:circle><svg:path fill="#FFF" d="M15.7 27.4C9.238 27.4 4 22.162 4 15.7S9.238 4 15.7 4s11.7 5.238 11.7 11.7s-5.238 11.7-11.7 11.7m2.89-7.7l-2.89-4l-2.89 4l-2.35-4l2.62-4.48h5.24l2.62 4.48zm.86-10.4h-7.5l-3.74 6.4l3.75 6.4h7.49l3.74-6.4z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorTbxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorRyoIcon],svg[cryptocurrency-color-ryo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#3D58B0"></svg:circle><svg:g fill="#FFF"><svg:path d="M15.986 4C9.376 4 4 9.376 4 15.986S9.376 27.97 15.986 27.97S27.97 22.595 27.97 15.986C27.971 9.376 22.595 4 15.986 4m0 1.632a10.34 10.34 0 0 1 10.353 10.354a10.34 10.34 0 0 1-10.353 10.353A10.34 10.34 0 0 1 5.632 15.986A10.34 10.34 0 0 1 15.986 5.632"></svg:path><svg:path d="M11.533 11.56v8.85h8.905v-8.85zm1.45 1.45h6.004v5.95h-6.003z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorRyoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorElixIcon],svg[cryptocurrency-color-elix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#00aded"></svg:circle><svg:g fill="#fff"><svg:path d="m10.097 23.603l.002-.004l3.188-7.616l-3.19-7.615l5.885 7.615l-5.881 7.615zm11.776 0l-.004-.005l-5.881-7.615l5.885-7.615l-3.19 7.615l3.188 7.616z"></svg:path><svg:path fill-opacity=".8" d="M15.985 15.984v5.306l-5.89 2.31l5.89-7.62v-5.306l5.89-2.31z"></svg:path><svg:path fill-opacity=".5" d="M15.985 21.29v4.651l-5.89-2.344l5.89-2.315v-5.298l-5.89-7.62l5.89 2.31V6.023l5.89 2.343l-5.89 2.315v5.299l5.89 7.62z"></svg:path><svg:path fill-opacity=".145" d="m10.095 8.366l5.89-2.343v4.658zm11.78 15.231l-5.89 2.344v-4.659z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorElixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

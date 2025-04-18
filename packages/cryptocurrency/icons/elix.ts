import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyElixIcon],svg[cryptocurrency-elix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-5.902-8.404l5.887 2.345l5.884-2.348l-3.186-7.61l3.188-7.618l-5.886-2.342l-5.887 2.345l3.189 7.615z"></svg:path><svg:path fill="currentColor" fill-opacity=".197" d="M15.985 15.984v5.306l-5.89 2.31l5.89-7.62v-5.306l5.89-2.31z"></svg:path><svg:path fill="currentColor" fill-opacity=".5" d="M15.985 21.29v4.651l-5.89-2.344l5.89-2.315v-5.298l-5.89-7.62l5.89 2.31V6.023l5.89 2.343l-5.89 2.315v5.299l5.89 7.62z"></svg:path><svg:path fill="currentColor" fill-opacity=".75" d="m10.095 8.366l5.89-2.343v4.658zm11.78 15.231l-5.89 2.344v-4.659z"></svg:path>`,
})
export class CryptocurrencyElixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

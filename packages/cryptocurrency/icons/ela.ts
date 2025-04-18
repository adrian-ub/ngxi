import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyElaIcon],svg[cryptocurrency-ela-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M6 10.23l10 5.704l10-5.704l-5-2.8l-5.004 2.872L11 7.432zm0 9l10 5.704l10-5.704l-5-2.8l-5 2.874l-5-2.871l-5 2.798z"></svg:path><svg:g fill-rule="nonzero"><svg:path fill-opacity=".604" d="m11 22.119l5-2.82v5.635zm0-9l5-2.82v5.635z"></svg:path><svg:path fill-opacity=".299" d="m26 19.23l-5 2.886V16.43zm0-9l-5 2.886V7.43z"></svg:path><svg:path fill-opacity=".197" d="M11 22.116v-5.683l5 2.87zm0-9V7.433l5 2.87z"></svg:path><svg:path fill-opacity=".404" d="m21 22.116l-5 2.818v-5.63zm0-9l-5 2.818v-5.63z"></svg:path><svg:path fill-opacity=".5" d="M11 16.433v5.683l-5-2.885zm0-9v5.683l-5-2.885z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyElaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

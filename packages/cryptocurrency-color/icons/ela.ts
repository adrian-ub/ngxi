import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorElaIcon],svg[cryptocurrency-color-ela-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#3FBADF"></svg:circle><svg:g fill="#FFF" fill-rule="nonzero"><svg:path fill-opacity=".4" d="m11 22.119l5-2.82v5.635zm0-9l5-2.82v5.635z"></svg:path><svg:path fill-opacity=".7" d="m26 19.23l-5 2.886V16.43zm0-9l-5 2.886V7.43z"></svg:path><svg:path fill-opacity=".8" d="M11 22.116v-5.683l5 2.87zm0-9V7.433l5 2.87z"></svg:path><svg:path d="m21 22.116l-5-2.812l5-2.874zm0-9l-5-2.812l5-2.874z"></svg:path><svg:path fill-opacity=".6" d="m21 22.116l-5 2.818v-5.63zm0-9l-5 2.818v-5.63z"></svg:path><svg:path fill-opacity=".5" d="M11 16.433v5.683l-5-2.885zm0-9v5.683l-5-2.885z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorElaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCurrencyLiraIcon],svg[material-symbols-light-currency-lira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 20v-5.054l-3 1.875V15.62l3-1.875v-3.523l-3 1.875V10.92l3-1.9V4h1v4.404l4-2.5V7.08l-4 2.525v3.523l4-2.5v1.177l-4 2.525V19h.5q2.075 0 3.672-1.386T16.462 14h1.019q-.173 2.56-2.028 4.28T11 20z"></svg:path>`,
})
export class MaterialSymbolsLightCurrencyLiraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

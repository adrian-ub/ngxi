import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUniversalCurrencyAltOutlineIcon],svg[material-symbols-light-universal-currency-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.308 15.692h3.384v-3.384h-.884v2.5h-2.5zM12 14.385q.98 0 1.683-.702q.702-.702.702-1.683t-.702-1.683T12 9.615t-1.683.702T9.615 12t.702 1.683t1.683.702m-6.692-2.693h.884v-2.5h2.5v-.884H5.308zM3 18V6h18v12zm1-1h16V7H4zm0 0V7z"></svg:path>`,
})
export class MaterialSymbolsLightUniversalCurrencyAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

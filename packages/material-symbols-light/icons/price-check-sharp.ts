import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPriceCheckSharpIcon],svg[material-symbols-light-price-check-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14.494v-1H4.5v-1h5v-3h-5v-5H7v-1h1v1h2.5v1h-5v3h5v5H8v1zm6.95 5.808l-3.558-3.558l.708-.707l2.85 2.85l5.689-5.689l.707.708z"></svg:path>`,
})
export class MaterialSymbolsLightPriceCheckSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

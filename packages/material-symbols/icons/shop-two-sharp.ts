import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShopTwoSharpIcon],svg[material-symbols-shop-two-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15l5.5-3.5L12 8zM1 22V9h2v11h17v2zm4-4V5h5V1h8v4h5v13zm7-13h4V3h-4z"></svg:path>`,
})
export class MaterialSymbolsShopTwoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

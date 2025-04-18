import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShopSharpIcon],svg[material-symbols-shop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V6h6V2h8v4h6v15zm8-15h4V4h-4zm-.5 12l7-4.5l-7-4.5z"></svg:path>`,
})
export class MaterialSymbolsShopSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

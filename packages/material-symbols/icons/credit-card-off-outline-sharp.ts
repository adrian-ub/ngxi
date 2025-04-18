import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCreditCardOffOutlineSharpIcon],svg[material-symbols-credit-card-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 19.15l-2-2V12h-5.15l-4-4H20V6H8.85l-2-2H22zM9.15 12H4v6h11.15zm11.3 11.3l-3.3-3.3H2V4h2l2 2H4v2h1.15L.65 3.5l1.425-1.425l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsCreditCardOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

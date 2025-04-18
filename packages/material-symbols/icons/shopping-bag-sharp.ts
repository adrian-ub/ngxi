import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShoppingBagSharpIcon],svg[material-symbols-shopping-bag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V6h4q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h4v16zm6-16h4q0-.825-.587-1.412T12 4t-1.412.588T10 6m-2 5h2V8H8zm6 0h2V8h-2z"></svg:path>`,
})
export class MaterialSymbolsShoppingBagSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

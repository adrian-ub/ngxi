import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCheckedBagOutlineSharpIcon],svg[material-symbols-checked-bag-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-2h20v2zm2-4V6h5q0-1.25.875-2.125T12 3t2.125.875T15 6h5v11zm13-2h1V8h-1zm-6.5-9h3q0-.65-.425-1.075T12 4.5t-1.075.425T10.5 6M7 15V8H6v7zm1.5-7v7h7V8zM7 15h1.5zm10 0h-1.5zM7 15H6zm1.5 0h7zm8.5 0h1z"></svg:path>`,
})
export class MaterialSymbolsCheckedBagOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

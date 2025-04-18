import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCheckedBagSharpIcon],svg[material-symbols-checked-bag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 17V6H9q0-1.25.875-2.125T12 3t2.125.875T15 6h.5v11zm2-11h3q0-.65-.425-1.075T12 4.5t-1.075.425T10.5 6M17 17V6h3v11zM4 17V6h3v11zm-2 4v-2h20v2z"></svg:path>`,
})
export class MaterialSymbolsCheckedBagSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

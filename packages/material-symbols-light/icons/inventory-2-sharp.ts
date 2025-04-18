import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInventory2SharpIcon],svg[material-symbols-light-inventory-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V8.385H3V3h18v5.385h-1V21zM4 7.385h16V4H4zm5.385 5.48h5.23V12h-5.23z"></svg:path>`,
})
export class MaterialSymbolsLightInventory2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

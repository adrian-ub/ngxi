import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInventory2OutlineSharpIcon],svg[material-symbols-inventory-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V9H2V2h20v7h-1v13zm2-2h14V9H5zM4 7h16V4H4zm5 7h6v-2H9zm3 .5"></svg:path>`,
})
export class MaterialSymbolsInventory2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

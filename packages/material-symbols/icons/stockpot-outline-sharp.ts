import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockpotOutlineSharpIcon],svg[material-symbols-stockpot-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V8h18v12zm2-2h14v-8H5zM3 7V5h6V3h6v2h6v2zm9 7"></svg:path>`,
})
export class MaterialSymbolsStockpotOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

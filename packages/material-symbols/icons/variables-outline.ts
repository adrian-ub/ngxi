import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVariablesOutlineIcon],svg[material-symbols-variables-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17v-3h-3v-2h3V9h2v3h3v2h-3v3h-2ZM3 14V4h18v3h-2V6H5v6h9v2H3Zm2-4V6v6v-2Z"></svg:path>`,
})
export class MaterialSymbolsVariablesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

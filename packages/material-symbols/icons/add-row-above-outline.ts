import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddRowAboveOutlineIcon],svg[material-symbols-add-row-above-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h14v-6H5zm16 2H3V4h4v2H5v6h14V6h-2V4h4zm-9-8v-2zm-1-6V6H9V4h2V2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsAddRowAboveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

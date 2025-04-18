import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddRowAboveOutlineIcon],svg[material-symbols-light-add-row-above-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h14v-6.558H5zm15 1H4V5h3.116v1H5v6.442h14V6h-2.116V5H20zm-8-7.558v-1zM11.5 8V6h-2V5h2V3h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddRowAboveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTooltipOutlineSharpIcon],svg[material-symbols-light-tooltip-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-2.29-3.5H3V3h18v14.5h-6.71zm0-1.811l1.754-2.689H20V4H4v12.5h6.246zm0-8.939"></svg:path>`,
})
export class MaterialSymbolsLightTooltipOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

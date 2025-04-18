import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowsOutwardIcon],svg[material-symbols-light-arrows-outward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.712 16.308l-.727-.689l3.094-3.1H13V11.5h6.079l-3.075-3.08l.707-.69L21 12.02zm-9.404 0L3 12.019l4.289-4.288l.707.688L4.921 11.5H11v1.02H4.902l3.094 3.1z"></svg:path>`,
})
export class MaterialSymbolsLightArrowsOutwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

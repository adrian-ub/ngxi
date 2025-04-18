import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRangeHoodSharpIcon],svg[material-symbols-range-hood-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.05 12L7 8V3h10v5l4 4zM2 20v-6h20v6zm8-3.3h4v-1.5h-4z"></svg:path>`,
})
export class MaterialSymbolsRangeHoodSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

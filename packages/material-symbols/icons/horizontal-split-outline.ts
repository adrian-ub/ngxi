import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHorizontalSplitOutlineIcon],svg[material-symbols-horizontal-split-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7V5h18v2Zm0 4V9h18v2Zm0 8v-6h18v6Zm2-2h14v-2H5Zm0 0v-2v2Z"></svg:path>`,
})
export class MaterialSymbolsHorizontalSplitOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

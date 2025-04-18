import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRangeHoodOutlineIcon],svg[material-symbols-range-hood-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18v-4.2q0-.4.163-.763T2.6 12.4L7 8V3h10v5l4.425 4.425q.275.275.425.638t.15.762V18q0 .825-.587 1.413T20 20zm1.8-8h12.4L15 8.8V5H9v3.8zM4 18h16v-4H4zm6-1.3v-1.5h4v1.5z"></svg:path>`,
})
export class MaterialSymbolsRangeHoodOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

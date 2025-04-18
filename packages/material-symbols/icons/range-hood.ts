import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRangeHoodIcon],svg[material-symbols-range-hood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.05 12H21l-4-4V3H7v5zM4 20h16q.825 0 1.413-.587T22 18v-4H2v4q0 .825.588 1.413T4 20m6-3.3v-1.5h4v1.5z"></svg:path>`,
})
export class MaterialSymbolsRangeHoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

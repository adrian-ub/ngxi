import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShelfPositionOutlineSharpIcon],svg[material-symbols-shelf-position-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-2h14v-3H5zm11.5-5H19V5h-2.5zM5 14h2.5V5H5zm4.5 0h5V5h-5z"></svg:path>`,
})
export class MaterialSymbolsShelfPositionOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

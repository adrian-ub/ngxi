import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPositionBottomLeftOutlineSharpIcon],svg[material-symbols-position-bottom-left-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17h9v-3H6zm-3 4V3h18v18zm2-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsPositionBottomLeftOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

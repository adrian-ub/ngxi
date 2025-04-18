import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPositionTopRightOutlineSharpIcon],svg[material-symbols-position-top-right-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10h9V7H9zM3 21V3h18v18zm2-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsPositionTopRightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

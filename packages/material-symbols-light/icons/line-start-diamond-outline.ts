import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartDiamondOutlineIcon],svg[material-symbols-light-line-start-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15.348L12.348 12L9 8.652L5.652 12zm0 1.421L4.23 12L9 7.23l4.27 4.27h7.653v1h-7.654zM9 12"></svg:path>`,
})
export class MaterialSymbolsLightLineStartDiamondOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

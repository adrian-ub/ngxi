import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStartDiamondOutlineIcon],svg[material-symbols-line-start-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16.175L13.175 12L9 7.825L4.825 12zM9 19l-7-7l7-7l6 6h7v2h-7zm0-7"></svg:path>`,
})
export class MaterialSymbolsLineStartDiamondOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

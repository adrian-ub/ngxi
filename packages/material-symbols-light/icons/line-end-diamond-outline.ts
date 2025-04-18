import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndDiamondOutlineIcon],svg[material-symbols-light-line-end-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15.348L18.348 12L15 8.652L11.652 12zm0 1.421L10.73 12.5H3.078v-1h7.654L15 7.23L19.77 12zM15 12"></svg:path>`,
})
export class MaterialSymbolsLightLineEndDiamondOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

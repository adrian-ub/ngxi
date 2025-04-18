import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndDiamondOutlineIcon],svg[material-symbols-line-end-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16.175L19.175 12L15 7.825L10.825 12zM15 19l-6-6H2v-2h7l6-6l7 7zm0-7"></svg:path>`,
})
export class MaterialSymbolsLineEndDiamondOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsP2pOutlineSharpIcon],svg[material-symbols-p2p-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V2h9v7H9V7H4v8h7v5zm11 2v-7h2v2h5V9h-7V4h9v18zm-9-4h5v-1H4zm11 2h5v-1h-5zM4 5h5V4H4zm11 2h5V6h-5zM4 18v-1zm11 2v-1zM4 5V4zm11 2V6zm-8 6v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsP2pOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsP2pSharpIcon],svg[material-symbols-p2p-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V2h9v7H9V7H4v8h7v5zm11 2v-7h2v2h5V9h-7V4h9v18zm-6-9v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsP2pSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

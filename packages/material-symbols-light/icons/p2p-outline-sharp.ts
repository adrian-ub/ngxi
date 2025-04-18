import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightP2pOutlineSharpIcon],svg[material-symbols-light-p2p-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V3h7.808v5.846h-1V6.827H4v8.346h6.808V19zm10.192 2v-5.827h1v2H20V8.846h-6.808V5H21v16zM4 18h5.808v-1.827H4zm10.192 2H20v-1.827h-5.808zM4 5.827h5.808V4H4zm10.192 2.02H20V6h-5.808zM4 18v-1.827zm10.192 2v-1.827zM4 5.827V4zm10.192 2.02V6zM7.423 12.73v-1.462h1.462v1.462zm3.846 0v-1.462h1.462v1.462zm3.827 0v-1.462h1.462v1.462z"></svg:path>`,
})
export class MaterialSymbolsLightP2pOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

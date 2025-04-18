import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightP2pSharpIcon],svg[material-symbols-light-p2p-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V3h7.808v5.846h-1V6.827H4v8.346h6.808V19zm10.192 2v-5.827h1v2H20V8.846h-6.808V5H21v16zm-5.769-8.27v-1.46h1.462v1.46zm3.846 0v-1.46h1.462v1.46zm3.827 0v-1.46h1.462v1.46z"></svg:path>`,
})
export class MaterialSymbolsLightP2pSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

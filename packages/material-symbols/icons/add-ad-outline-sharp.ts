import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddAdOutlineSharpIcon],svg[material-symbols-add-ad-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20v-3h-3v-2h3v-3h2v3h3v2h-3v3zM1 21V3h18v7h-2V8H3v11h13v2zM3 6h14V5H3zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsAddAdOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddBoxOutlineSharpIcon],svg[material-symbols-add-box-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm-8 4V3h18v18zm2-2h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsAddBoxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

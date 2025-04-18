import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextAdOutlineSharpIcon],svg[material-symbols-text-ad-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h16V6H4zm0 0V6zm1-1h14v-2H5zm0-4h14v-2H5zm0-4h10V7H5z"></svg:path>`,
})
export class MaterialSymbolsTextAdOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

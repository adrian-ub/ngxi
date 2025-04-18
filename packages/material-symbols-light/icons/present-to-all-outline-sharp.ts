import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPresentToAllOutlineSharpIcon],svg[material-symbols-light-present-to-all-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 15.308h1v-4.689l2.1 2.095l.713-.714L12 8.692L8.692 12l.714.708l2.094-2.094zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightPresentToAllOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

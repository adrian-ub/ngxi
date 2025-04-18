import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUniversalLocalOutlineSharpIcon],svg[material-symbols-light-universal-local-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h16V6H4zm-1 1V5h18v14zm1-1V6zm7.997-6q-.345 0-.575-.233t-.23-.578t.234-.574t.577-.23t.575.233t.23.578t-.233.574t-.578.23M12 16.038q1.621-1.379 2.426-2.572t.805-2.193q0-1.529-.972-2.42q-.972-.892-2.259-.892t-2.259.892t-.972 2.42q0 1 .805 2.193T12 16.04"></svg:path>`,
})
export class MaterialSymbolsLightUniversalLocalOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

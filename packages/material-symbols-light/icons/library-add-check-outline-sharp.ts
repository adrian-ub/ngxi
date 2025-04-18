import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLibraryAddCheckOutlineSharpIcon],svg[material-symbols-light-library-add-check-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.2 13.32l4.958-4.959l-.708-.719l-4.25 4.25l-2.15-2.138l-.708.708zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-16v12z"></svg:path>`,
})
export class MaterialSymbolsLightLibraryAddCheckOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

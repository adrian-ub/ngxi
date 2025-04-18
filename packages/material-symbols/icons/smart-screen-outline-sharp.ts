import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSmartScreenOutlineSharpIcon],svg[material-symbols-smart-screen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h22v14zm3-2V7H3v10zm2 0h12V7H6zm14 0h1V7h-1zM4 7H3zm16 0h1zm-6.75 5.75q-.325 0-.537-.213T12.5 12t.213-.537t.537-.213t.538.213T14 12t-.213.538t-.537.212m-5 0q-.325 0-.537-.213T7.5 12t.213-.537t.537-.213t.538.213T9 12t-.213.538t-.537.212m7.5 0q-.325 0-.537-.213T15 12t.213-.537t.537-.213t.538.213t.212.537t-.213.538t-.537.212m-5 0q-.325 0-.537-.213T10 12t.213-.537t.537-.213t.538.213t.212.537t-.213.538t-.537.212"></svg:path>`,
})
export class MaterialSymbolsSmartScreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnfloatPortraitOutlineSharpIcon],svg[material-symbols-unfloat-portrait-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v11h-2V4H6v16h7v2Zm10.5-10.925L11.425 8H14V6H8v6h2V9.4l3.075 3.1ZM15 22v-7h5v7Zm-3-10Z"></svg:path>`,
})
export class MaterialSymbolsUnfloatPortraitOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

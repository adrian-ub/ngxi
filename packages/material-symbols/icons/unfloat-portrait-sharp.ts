import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnfloatPortraitSharpIcon],svg[material-symbols-unfloat-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.075 12.5l1.425-1.425L11.425 8H14V6H8v6h2V9.4ZM15 22v-7h5v7ZM4 22V2h16v11h-7v9Z"></svg:path>`,
})
export class MaterialSymbolsUnfloatPortraitSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

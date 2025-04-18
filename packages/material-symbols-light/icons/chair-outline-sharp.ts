import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChairOutlineSharpIcon],svg[material-symbols-light-chair-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.539 19.346v-1.5H2v-9h2V5.231h16v3.615h2v9h-2.538v1.5H18.5v-1.5H5.539v1.5zM3 16.846h18v-7h-2v4.5H5v-4.5H3zm3-3.5h12v-4.5h1V6.231H5v2.615h1zm6 1"></svg:path>`,
})
export class MaterialSymbolsLightChairOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

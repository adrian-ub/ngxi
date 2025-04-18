import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddToHomeScreenOutlineSharpIcon],svg[material-symbols-light-add-to-home-screen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22v-4.923h1V18.5h10v-13H8v1.423H7V2h12v20zm1-2.5V21h10v-1.5zm-3.6-3.192l-.708-.708l6.1-6.1H5.5v-1h6v6h-1v-4.292zM8 4.5h10V3H8zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightAddToHomeScreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

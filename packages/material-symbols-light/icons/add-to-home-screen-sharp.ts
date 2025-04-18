import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddToHomeScreenSharpIcon],svg[material-symbols-light-add-to-home-screen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22v-4.923h1V18.5h10v-13H8v1.423H7V2h12v20zm-2.6-5.692l-.708-.708l6.1-6.1H5.5v-1h6v6h-1v-4.292z"></svg:path>`,
})
export class MaterialSymbolsLightAddToHomeScreenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

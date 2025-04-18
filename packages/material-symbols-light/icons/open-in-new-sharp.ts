import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOpenInNewSharpIcon],svg[material-symbols-light-open-in-new-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h7.23v1H5v14h14v-6.23h1V20zm5.739-5.03l-.708-.709L18.292 5H14V4h6v6h-1V5.708z"></svg:path>`,
})
export class MaterialSymbolsLightOpenInNewSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

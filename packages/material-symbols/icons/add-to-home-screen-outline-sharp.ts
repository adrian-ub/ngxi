import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddToHomeScreenOutlineSharpIcon],svg[material-symbols-add-to-home-screen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 23v-6h2v1h10V6H8v1H6V1h14v22zm2-3v1h10v-1zm-3.6-3L3 15.6L8.6 10H5V8h7v7h-2v-3.6zM8 4h10V3H8zm0 0V3zm0 16v1z"></svg:path>`,
})
export class MaterialSymbolsAddToHomeScreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

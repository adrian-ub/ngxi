import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddToHomeScreenSharpIcon],svg[material-symbols-add-to-home-screen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 23v-6h2v1h10V6H8v1H6V1h14v22zm-1.6-6L3 15.6L8.6 10H5V8h7v7h-2v-3.6z"></svg:path>`,
})
export class MaterialSymbolsAddToHomeScreenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

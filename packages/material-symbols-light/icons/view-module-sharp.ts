import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewModuleSharpIcon],svg[material-symbols-light-view-module-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.002 11.616V6h4.979v5.616zm-5.402 0V6h4.825v5.616zm-5.556 0V6h4.979v5.616zm0 6.384v-5.615h4.979V18zM9.6 18v-5.615h4.825V18zm5.402 0v-5.615h4.979V18z"></svg:path>`,
})
export class MaterialSymbolsLightViewModuleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

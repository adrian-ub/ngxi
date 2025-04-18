import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLdaOutlineSharpIcon],svg[material-symbols-light-lda-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20.308v-3.195l-5.692-2.41V11H11.5V8H8.808V3.615h6.384V8H12.5v3h5.692v3.704l-5.692 2.41v3.194zM9.808 7h4.384V4.616H9.808zm1.692 9.016V12H6.808v2.037zm1 0l4.692-1.979V12H12.5zM9.808 7V4.616z"></svg:path>`,
})
export class MaterialSymbolsLightLdaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

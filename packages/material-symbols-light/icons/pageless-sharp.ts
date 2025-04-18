import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPagelessSharpIcon],svg[material-symbols-light-pageless-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-6.654h1V20h6.654v1zm12.346 0v-1H21v-5.654h1V21zM2 9.673V3h7.654v1H3v5.673zm19 0V4h-6.654V3H22v6.673z"></svg:path>`,
})
export class MaterialSymbolsLightPagelessSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

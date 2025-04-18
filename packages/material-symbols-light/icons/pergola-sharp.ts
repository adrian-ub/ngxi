import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPergolaSharpIcon],svg[material-symbols-light-pergola-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V3h1v2h14V3h1v17h-1V9.77H5V20zm7.5 0v-2.827H8.673v-1h6.635v1H12.5V20z"></svg:path>`,
})
export class MaterialSymbolsLightPergolaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

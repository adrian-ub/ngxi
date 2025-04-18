import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPergolaOutlineSharpIcon],svg[material-symbols-light-pergola-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V3h1v2h14V3h1v17h-1V9.77H5V20zM5 8.77h14V6H5zM11.5 20v-2.827H8.673v-1h6.635v1H12.5V20zM5 8.77V6z"></svg:path>`,
})
export class MaterialSymbolsLightPergolaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

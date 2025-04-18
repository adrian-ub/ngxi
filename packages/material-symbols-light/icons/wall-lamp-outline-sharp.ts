import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWallLampOutlineSharpIcon],svg[material-symbols-light-wall-lamp-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.73 20v-5h1v5zm4.62-8h9.3l-1.8-6h-5.7zm0 0h9.3zM6.5 18v-1h6v-4H6.996L9.4 5h7.2l2.404 8H13.5v5z"></svg:path>`,
})
export class MaterialSymbolsLightWallLampOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWidthFullOutlineSharpIcon],svg[material-symbols-light-width-full-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-1h1.423V6H4zm2.423 0h11.154V6H6.423zm12.154 0H20V6h-1.423zM6.423 6v12z"></svg:path>`,
})
export class MaterialSymbolsLightWidthFullOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

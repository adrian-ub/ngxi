import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStraightenOutlineSharpIcon],svg[material-symbols-light-straighten-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7h18v10zm1-1h16V8h-3.5v3.23h-1V8h-3v3.23h-1V8h-3v3.23h-1V8H4zm3.5-4.77h1zm4 0h1zm4 0h1zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightStraightenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

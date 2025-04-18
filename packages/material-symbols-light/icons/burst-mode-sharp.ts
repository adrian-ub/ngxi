import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBurstModeSharpIcon],svg[material-symbols-light-burst-mode-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 18V6h1v12zM6 18V6h1v12zm4.23 0V6h12v12zm2.462-3.23h7.077l-2.138-2.886l-1.9 2.5l-1.4-1.85z"></svg:path>`,
})
export class MaterialSymbolsLightBurstModeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

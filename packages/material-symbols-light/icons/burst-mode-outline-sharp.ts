import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBurstModeOutlineSharpIcon],svg[material-symbols-light-burst-mode-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 18V6h1v12zM6 18V6h1v12zm4.23 0V6h12v12zm1-1h10V7h-10zm1.462-2.23h7.077l-2.138-2.886l-1.9 2.5l-1.4-1.85zM11.231 17V7z"></svg:path>`,
})
export class MaterialSymbolsLightBurstModeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

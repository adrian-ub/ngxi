import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnhancedEncryptionSharpIcon],svg[material-symbols-enhanced-encryption-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16v3h2v-3h3v-2h-3v-3h-2v3H8v2zm-7 6V8h3V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h3v14zM9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"></svg:path>`,
})
export class MaterialSymbolsEnhancedEncryptionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

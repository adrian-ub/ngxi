import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEnhancedEncryptionOutlineSharpIcon],svg[material-symbols-light-enhanced-encryption-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 15.5v3h1v-3h3v-1h-3v-3h-1v3h-3v1zM5 21V9h3V7q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7v2h3v12zm1-1h12V10H6zM9 9h6V7q0-1.25-.875-2.125T12 4t-2.125.875T9 7zM6 20V10z"></svg:path>`,
})
export class MaterialSymbolsLightEnhancedEncryptionOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

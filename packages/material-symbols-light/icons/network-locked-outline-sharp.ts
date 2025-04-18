import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNetworkLockedOutlineSharpIcon],svg[material-symbols-light-network-locked-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21L21 3v8.462h-1V5.426L5.421 20H14v1zm13.23 0v-4.538h1v-1q0-.748.511-1.259t1.259-.51t1.259.51t.51 1.259v1h.981V21zM18 16.462h2v-1q0-.425-.288-.713T19 14.461t-.712.288t-.288.713zM5.421 20L20 5.427l-7.29 7.287z"></svg:path>`,
})
export class MaterialSymbolsLightNetworkLockedOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

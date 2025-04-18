import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNetworkLockedSharpIcon],svg[material-symbols-light-network-locked-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.23 21v-4.538h1v-1q0-.748.511-1.259t1.259-.51t1.259.51t.51 1.259v1h.981V21zM18 16.462h2v-1q0-.425-.288-.713T19 14.461t-.712.288t-.288.713zM3 21L21 3v8.462h-2q-2.075 0-3.537 1.462T14 16.462V21z"></svg:path>`,
})
export class MaterialSymbolsLightNetworkLockedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

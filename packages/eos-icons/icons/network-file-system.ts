import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsNetworkFileSystemIcon],svg[eos-icons-network-file-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17h-3v-4h-2v4H8v1H2v2h6v1h8v-1h6v-2h-6zm-1-4h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-6l-1-1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z"></svg:path>`,
})
export class EosIconsNetworkFileSystemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

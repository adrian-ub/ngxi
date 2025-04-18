import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPermScanWifiIcon],svg[material-symbols-perm-scan-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9zm-1-6h2v-5h-2zm1-6q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9"></svg:path>`,
})
export class MaterialSymbolsPermScanWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

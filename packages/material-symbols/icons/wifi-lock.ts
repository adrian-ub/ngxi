import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifiLockIcon],svg[material-symbols-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.475 2.475q-.575-.275-1.213-.413t-1.287-.137q-2.525 0-4.3 1.775T12.95 17q0 .65.138 1.288T13.5 19.5zm5 0q-.425 0-.712-.288T16 20v-3q0-.425.288-.712T17 16v-1q0-.825.588-1.412T19 13t1.413.588T21 15v1q.425 0 .713.288T22 17v3q0 .425-.288.713T21 21zm1-5h2v-1q0-.425-.288-.712T19 14t-.712.288T18 15z"></svg:path>`,
})
export class MaterialSymbolsWifiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

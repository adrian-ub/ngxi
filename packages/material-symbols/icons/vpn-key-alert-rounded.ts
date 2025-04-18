import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVpnKeyAlertRoundedIcon],svg[material-symbols-vpn-key-alert-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.825 0 1.413-.587T9 12t-.587-1.412T7 10t-1.412.588T5 12t.588 1.413T7 14m0 4q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.138T12.65 10H18q.425 0 .713.288T19 11v6q0 .425-.288.713T18 18t-.712-.288T17 17v-3h-4.35q-.6 1.725-2.113 2.863T7 18m15 0q-.425 0-.712-.288T21 17t.288-.712T22 16t.713.288T23 17t-.288.713T22 18m0-4q-.425 0-.712-.288T21 13v-3q0-.425.288-.712T22 9t.713.288T23 10v3q0 .425-.288.713T22 14"></svg:path>`,
})
export class MaterialSymbolsVpnKeyAlertRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

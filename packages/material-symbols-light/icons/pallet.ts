import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPalletIcon],svg[material-symbols-light-pallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.885 19.577v-2h16.23v2h-1.769v-1h-5.461v1h-1.77v-1h-5.46v1zm2.942-4q-.343 0-.575-.232t-.233-.576V4.385q0-.344.232-.576q.233-.232.576-.232h10.346q.343 0 .576.232t.232.576v10.23q0 .409-.266.686q-.265.276-.657.276zM9 8.154h6v-1H9z"></svg:path>`,
})
export class MaterialSymbolsLightPalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

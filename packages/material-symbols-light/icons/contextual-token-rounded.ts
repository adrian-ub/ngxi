import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightContextualTokenRoundedIcon],svg[material-symbols-light-contextual-token-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.577 15.346h4.114q.35 0 .58-.232t.229-.575v-.347q0-.343-.232-.575t-.576-.232H7.58q-.35 0-.58.232t-.23.575v.347q0 .343.232.575t.576.232m8.5 0h.346q.343 0 .576-.232t.232-.575V9.46q0-.343-.233-.575t-.575-.232h-.346q-.343 0-.576.232t-.232.576v5.077q0 .343.232.575t.576.232m-8.5-4.73h4.114q.35 0 .58-.233t.229-.575v-.346q0-.344-.232-.576t-.576-.232H7.58q-.35 0-.58.232t-.23.575v.347q0 .343.232.575t.576.232M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z"></svg:path>`,
})
export class MaterialSymbolsLightContextualTokenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

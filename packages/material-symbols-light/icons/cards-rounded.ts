import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCardsRoundedIcon],svg[material-symbols-light-cards-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.308 11.116H7.577q-.343 0-.575-.233t-.233-.575V7.577q0-.343.232-.575t.576-.233h2.73q.344 0 .576.233t.232.575v2.73q0 .344-.232.576t-.575.233m0 6.115H7.577q-.343 0-.575-.233t-.233-.575v-2.73q0-.344.232-.576t.576-.232h2.73q.344 0 .576.232t.232.575v2.731q0 .343-.232.576t-.575.232m6.115-6.115h-2.73q-.344 0-.576-.233t-.232-.575V7.577q0-.343.232-.575t.575-.233h2.731q.343 0 .576.233t.232.575v2.73q0 .344-.232.576t-.576.233m0 6.115h-2.73q-.344 0-.576-.233t-.232-.575v-2.73q0-.344.232-.576t.575-.232h2.731q.343 0 .576.232t.232.575v2.731q0 .343-.232.576t-.576.232M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192"></svg:path>`,
})
export class MaterialSymbolsLightCardsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFinanceRoundedIcon],svg[material-symbols-light-finance-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.116 20q-.691 0-1.153-.462T3.5 18.384V3.5q0-.213.144-.356T4.001 3t.356.144t.143.356v14.885q0 .23.192.423t.423.192H20q.213 0 .356.144t.144.357t-.144.356T20 20zm3-3.5q-.311 0-.521-.21t-.21-.52V9.922q0-.31.21-.52t.52-.21h.462q.343 0 .576.233q.232.234.232.58v5.689q0 .346-.233.575q-.232.23-.575.23zm4.5 0q-.311 0-.521-.21t-.21-.52V5q0-.343.232-.575t.575-.233h.462q.31 0 .52.21t.21.521v10.77q0 .343-.231.575q-.233.232-.576.232zm4.5 0q-.311 0-.521-.21t-.21-.52V14q0-.343.232-.575t.575-.233h.462q.31 0 .52.21t.21.521v1.77q0 .343-.231.575t-.576.232z"></svg:path>`,
})
export class MaterialSymbolsLightFinanceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

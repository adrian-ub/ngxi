import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableRowsRoundedIcon],svg[material-symbols-light-table-rows-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.808 20q-.343 0-.576-.232T4 19.192v-2.976q0-.344.232-.576t.576-.232h14.384q.344 0 .576.232t.232.576v2.976q0 .344-.232.576t-.576.232zm0-5.592q-.343 0-.576-.232T4 13.6v-3.206q0-.343.232-.575t.576-.233h14.384q.344 0 .576.233t.232.575V13.6q0 .343-.232.576t-.576.232zm0-5.821q-.343 0-.576-.233T4 7.78V4.808q0-.343.232-.576T4.808 4h14.384q.344 0 .576.232t.232.576v2.97q0 .344-.232.576t-.576.233z"></svg:path>`,
})
export class MaterialSymbolsLightTableRowsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

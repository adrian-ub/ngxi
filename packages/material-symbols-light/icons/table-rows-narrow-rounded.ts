import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableRowsNarrowRoundedIcon],svg[material-symbols-light-table-rows-narrow-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.808 15.635q-.343 0-.576-.232Q4 15.17 4 14.827v-1.52q0-.342.232-.575t.576-.232h14.384q.344 0 .576.232t.232.576v1.519q0 .343-.232.576t-.576.232zm0-4.135q-.343 0-.576-.232T4 10.692V9.173q0-.343.232-.575t.576-.232h14.384q.344 0 .576.232t.232.575v1.52q0 .343-.232.575t-.576.232zm0-4.134q-.343 0-.576-.233T4 6.558v-1.52q0-.343.232-.575t.576-.232h14.384q.344 0 .576.232t.232.576v1.519q0 .343-.232.575t-.576.233zm0 12.403q-.343 0-.576-.232T4 18.962v-1.52q0-.343.232-.575t.576-.233h14.384q.344 0 .576.233t.232.575v1.52q0 .343-.232.575t-.576.232z"></svg:path>`,
})
export class MaterialSymbolsLightTableRowsNarrowRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDatasetRoundedIcon],svg[material-symbols-light-dataset-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.308 16.5h1.384q.344 0 .576-.232t.232-.576v-1.384q0-.344-.232-.576t-.576-.232H8.308q-.343 0-.576.232t-.232.576v1.384q0 .343.232.576t.576.232m6 0h1.384q.344 0 .576-.232t.232-.576v-1.384q0-.344-.232-.576t-.576-.232h-1.384q-.343 0-.576.232t-.232.576v1.384q0 .343.232.576t.576.232m-6-6h1.384q.344 0 .576-.232t.232-.576V8.308q0-.344-.232-.576T9.692 7.5H8.308q-.343 0-.576.232t-.232.576v1.384q0 .344.232.576t.576.232m6 0h1.384q.344 0 .576-.232t.232-.576V8.308q0-.343-.232-.576t-.576-.232h-1.384q-.343 0-.576.232t-.232.576v1.384q0 .344.232.576t.576.232M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightDatasetRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

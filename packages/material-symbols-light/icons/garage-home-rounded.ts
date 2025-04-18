import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGarageHomeRoundedIcon],svg[material-symbols-light-garage-home-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.808 20q-.343 0-.576-.232T5 19.192v-8.884q0-.384.172-.727t.474-.565l5.385-4.078q.223-.161.466-.242t.507-.08t.504.08t.461.242l5.385 4.077q.303.222.474.566q.172.343.172.727v8.884q0 .344-.232.576t-.576.232h-.884q-.343 0-.576-.232t-.232-.576V11.79q0-.344-.232-.576t-.576-.232H8.308q-.343 0-.576.232t-.232.576v7.403q0 .344-.232.576T6.692 20zm3.5-1.02q-.343 0-.576-.231t-.232-.576v-1.384q0-.344.232-.576t.576-.232h5.384q.344 0 .576.232t.232.575v1.385q0 .343-.232.576t-.576.232zm0-4q-.343 0-.576-.231t-.232-.576v-1.384q0-.344.232-.576t.576-.232h5.384q.344 0 .576.232t.232.576v1.384q0 .343-.232.575t-.576.233z"></svg:path>`,
})
export class MaterialSymbolsLightGarageHomeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

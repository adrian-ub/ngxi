import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightResponsiveLayoutRoundedIcon],svg[material-symbols-light-responsive-layout-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.808 20q-.344 0-.576-.232T15 19.192v-8.576q0-.667-.475-1.141T13.385 9h-3.077q-.343 0-.576-.232T9.5 8.192V4.808q0-.343.232-.576T10.308 4h8.884q.344 0 .576.232t.232.576v14.384q0 .344-.232.576t-.576.232zm-5.5 0q-.344 0-.576-.232t-.232-.576v-8.384q0-.343.232-.576t.576-.232h2.884q.344 0 .576.232t.232.576v8.384q0 .344-.232.576t-.576.232zm-5.5 0q-.344 0-.576-.232T4 19.192v-8.384q0-.343.232-.576T4.808 10h2.884q.343 0 .576.232t.232.576v8.384q0 .344-.232.576T7.692 20z"></svg:path>`,
})
export class MaterialSymbolsLightResponsiveLayoutRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignJustifyStretchRoundedIcon],svg[material-symbols-light-align-justify-stretch-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 21q-.213 0-.357-.144T20 20.5v-17q0-.213.144-.356T20.501 3t.356.144T21 3.5v17q0 .213-.144.356t-.357.144m-17 0q-.212 0-.356-.144T3 20.5v-17q0-.213.144-.356T3.501 3t.356.144T4 3.5v17q0 .213-.144.356T3.499 21m9.809-11.5q-.343 0-.576-.232t-.232-.576v-.384q0-.344.232-.576t.576-.232h3.384q.344 0 .576.232t.232.576v.384q0 .343-.232.576t-.576.232zm-6 0q-.343 0-.576-.232T6.5 8.692v-.384q0-.344.232-.576t.576-.232h3.384q.343 0 .576.232t.232.576v.384q0 .343-.232.576t-.576.232zm6 7q-.343 0-.576-.232t-.232-.576v-.384q0-.343.232-.576t.576-.232h3.384q.344 0 .576.232t.232.576v.384q0 .344-.232.576t-.576.232zm-6 0q-.343 0-.576-.232t-.232-.576v-.384q0-.343.232-.576t.576-.232h3.384q.343 0 .576.232t.232.576v.384q0 .344-.232.576t-.576.232z"></svg:path>`,
})
export class MaterialSymbolsLightAlignJustifyStretchRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignJustifySpaceBetweenRoundedIcon],svg[material-symbols-light-align-justify-space-between-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 21q-.213 0-.357-.144T20 20.5v-4h-1.192q-.344 0-.576-.232T18 15.692V8.308q0-.343.232-.576t.576-.232H20v-4q0-.213.144-.356T20.501 3t.356.144T21 3.5v17q0 .213-.144.356t-.357.144m-17 0q-.212 0-.356-.144T3 20.5v-17q0-.213.144-.356T3.501 3t.356.144T4 3.5v4h1.192q.343 0 .576.232T6 8.308v7.384q0 .344-.232.576t-.576.232H4v4q0 .213-.144.356T3.499 21"></svg:path>`,
})
export class MaterialSymbolsLightAlignJustifySpaceBetweenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

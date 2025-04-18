import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartSquareOutlineRoundedIcon],svg[material-symbols-light-line-start-square-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.577 14.923h5.846V9.077H4.577zm-.192 1q-.344 0-.576-.232t-.232-.576v-6.23q0-.344.232-.576t.576-.232h6.23q.344 0 .576.232t.232.576V11.5h9q.213 0 .356.144t.144.357t-.144.356t-.356.143h-9v2.616q0 .343-.232.575t-.575.232zM7.5 12"></svg:path>`,
})
export class MaterialSymbolsLightLineStartSquareOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

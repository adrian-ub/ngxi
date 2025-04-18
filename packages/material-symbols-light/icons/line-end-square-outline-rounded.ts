import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndSquareOutlineRoundedIcon],svg[material-symbols-light-line-end-square-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.577 14.923h5.846V9.077h-5.846zm-.192 1q-.344 0-.576-.232t-.232-.576V12.5h-9q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h9V8.885q0-.344.232-.576t.576-.232h6.23q.344 0 .576.232t.232.576v6.23q0 .344-.232.576t-.575.232zM16.5 12"></svg:path>`,
})
export class MaterialSymbolsLightLineEndSquareOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

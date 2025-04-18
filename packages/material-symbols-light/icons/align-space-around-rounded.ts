import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignSpaceAroundRoundedIcon],svg[material-symbols-light-align-space-around-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.308 17.5q-.343 0-.576-.232t-.232-.576v-.384q0-.343.232-.576t.576-.232h7.384q.344 0 .576.232t.232.576v.384q0 .344-.232.576t-.576.232zm0-9q-.343 0-.576-.232T7.5 7.692v-.384q0-.343.232-.576t.576-.232h7.384q.344 0 .576.232t.232.576v.384q0 .344-.232.576t-.576.232zM3.5 21q-.213 0-.356-.144T3 20.499t.144-.356T3.5 20h17q.213 0 .356.144t.144.357t-.144.356T20.5 21zm0-17q-.213 0-.356-.144T3 3.499t.144-.356T3.5 3h17q.213 0 .356.144t.144.357t-.144.356T20.5 4z"></svg:path>`,
})
export class MaterialSymbolsLightAlignSpaceAroundRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

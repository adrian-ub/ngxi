import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignFlexCenterRoundedIcon],svg[material-symbols-light-align-flex-center-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.192 21q-.213 0-.356-.144t-.144-.356V13H4.308q-.343 0-.576-.232t-.232-.576v-.384q0-.343.232-.576T4.308 11h7.384V3.5q0-.213.144-.356T12.193 3t.356.144t.143.356V11h7q.344 0 .576.232t.232.576v.384q0 .344-.232.576t-.576.232h-7v7.5q0 .213-.144.356q-.143.144-.356.144"></svg:path>`,
})
export class MaterialSymbolsLightAlignFlexCenterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

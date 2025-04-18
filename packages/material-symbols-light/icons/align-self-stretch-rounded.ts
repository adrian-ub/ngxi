import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignSelfStretchRoundedIcon],svg[material-symbols-light-align-self-stretch-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21q-.213 0-.356-.144T3 20.499t.144-.356T3.5 20h17q.213 0 .356.144t.144.357t-.144.356T20.5 21zm8.308-4.5q-.343 0-.576-.232T11 15.692v-7.88q0-.352.232-.582t.576-.23h.384q.344 0 .576.232t.232.576v7.88q0 .353-.232.582t-.576.23zM3.5 4q-.213 0-.356-.144T3 3.499t.144-.356T3.5 3h17q.213 0 .356.144t.144.357t-.144.356T20.5 4z"></svg:path>`,
})
export class MaterialSymbolsLightAlignSelfStretchRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

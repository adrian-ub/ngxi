import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignFlexEndRoundedIcon],svg[material-symbols-light-align-flex-end-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21q-.213 0-.356-.144T3 20.499t.144-.356T3.5 20h17q.213 0 .356.144t.144.357t-.144.356T20.5 21zm8.308-4q-.343 0-.576-.232T11 16.192V4.808q0-.343.232-.576T11.808 4h.384q.344 0 .576.232t.232.576v11.384q0 .344-.232.576t-.576.232z"></svg:path>`,
})
export class MaterialSymbolsLightAlignFlexEndRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

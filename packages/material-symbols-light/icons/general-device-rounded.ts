import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGeneralDeviceRoundedIcon],svg[material-symbols-light-general-device-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.573 17q-.344 0-.574-.232t-.23-.576V5.616q0-.667.475-1.141Q9.72 4 10.386 4h3.234q.667 0 1.139.475q.472.474.472 1.14v10.577q0 .344-.232.576q-.233.232-.576.232zm-.304 1.385h5.462q.212 0 .356.143t.144.357t-.144.356t-.356.144H9.269q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.144"></svg:path>`,
})
export class MaterialSymbolsLightGeneralDeviceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

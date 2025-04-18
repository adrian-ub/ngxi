import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDataTransferDownIcon],svg[cil-data-transfer-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 464h480v32H16zm379.313-164.687l-22.626-22.626L280 369.373V16h-32v353.373l-92.687-92.686l-22.626 22.626L264 430.627z"></svg:path>`,
})
export class CilDataTransferDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

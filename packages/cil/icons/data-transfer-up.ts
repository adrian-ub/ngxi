import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDataTransferUpIcon],svg[cil-data-transfer-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h480v32H16zm100.687 196.687l22.626 22.626L232 142.627V496h32V142.627l92.687 92.686l22.626-22.626L248 81.373z"></svg:path>`,
})
export class CilDataTransferUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

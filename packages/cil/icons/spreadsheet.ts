import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSpreadsheetIcon],svg[cil-spreadsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64v392h480V64Zm448 360H48V96h416Z"></svg:path><svg:path fill="currentColor" d="M88 136h88v32H88zm0 72h88v32H88zm0 72h88v32H88zm0 72h88v32H88zm200-216h136v32H288zm0 72h136v32H288zm0 72h136v32H288zm0 72h136v32H288zm-72-216h32v32h-32zm0 72h32v32h-32zm0 72h32v32h-32zm0 72h32v32h-32z"></svg:path>`,
})
export class CilSpreadsheetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

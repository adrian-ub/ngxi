import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBluetoothIcon],svg[cil-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150.627 376L232 294.627V496h38.627l120-120l-120-120l120-120l-120-120H232v201.373L150.627 136h-45.254l120 120l-120 120ZM264 54.627L345.373 136L264 217.373Zm0 240L345.373 376L264 457.373Z"></svg:path>`,
})
export class CilBluetoothIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

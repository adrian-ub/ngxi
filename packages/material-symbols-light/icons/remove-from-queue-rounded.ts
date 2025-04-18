import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRemoveFromQueueRoundedIcon],svg[material-symbols-light-remove-from-queue-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.5h6q.213 0 .356-.144t.144-.357t-.144-.356T15 10.5H9q-.213 0-.356.144t-.144.357t.144.356T9 11.5M4.616 18q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H15v1.192q0 .344-.232.576t-.576.232H9.808q-.343 0-.576-.232T9 19.192V18z"></svg:path>`,
})
export class MaterialSymbolsLightRemoveFromQueueRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

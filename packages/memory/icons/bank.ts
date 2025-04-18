import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBankIcon],svg[memory-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19H2v-2h2V9H2V7h1V6h2V5h2V4h2V3h4v1h2v1h2v1h2v1h1v2h-2v8h2m-3-8V7h-2V6h-2V5H9v1H7v1H5v2m3 8v-6H6v6m6 0v-6h-2v6m6 0v-6h-2v6Z"></svg:path>`,
})
export class MemoryBankIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

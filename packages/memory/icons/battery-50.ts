import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBattery50Icon],svg[memory-battery-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h2v6H5zm3 0h2v6H8zm10-3v1h1v3h1v4h-1v3h-1v1H3v-1H2V6h1V5zm-1 2H4v8h13z"></svg:path>`,
})
export class MemoryBattery50Icon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

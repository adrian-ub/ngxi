import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBattery0Icon],svg[memory-battery-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h15v1h1v3h1v4h-1v3h-1v1H3v-1H2V6h1zm1 2v8h13V7z"></svg:path>`,
})
export class MemoryBattery0Icon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryRingIcon],svg[memory-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21H8v-1H6v-1H5v-1H4v-2H3v-6h1V8h1V7h1V6h2V5H7V4H6V3h1V2h8v1h1v1h-1v1h-1v1h2v1h1v1h1v2h1v6h-1v2h-1v1h-1v1h-2M12 6V5h1V4H9v1h1v1m3 12v-1h2v-2h1v-4h-1V9h-2V8H9v1H7v2H6v4h1v2h2v1Z"></svg:path>`,
})
export class MemoryRingIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTridentIcon],svg[memory-trident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18H4v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V5h1V4h1V3h1V2h2v1h-1v1h-1v1h-1v2h1V6h1V5h1V4h2v2h-1v1h-1v1h-1v1h2V8h1V7h1V6h1v2h-1v1h-1v1h-1v1h-5v1h-1v1h-1v1H9v1H8v1H7v1H6Z"></svg:path>`,
})
export class MemoryTridentIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

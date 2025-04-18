import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryLedIcon],svg[memory-led-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-6H4v-2h2V6h1V4h1V3h1V2h4v1h1v1h1v2h1v7h2v2h-4v6h-2v-6h-2v6zm4-16V4h-2v1H9v2H8v6h1v-1h4v1h1V7h-1V5z"></svg:path>`,
})
export class MemoryLedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

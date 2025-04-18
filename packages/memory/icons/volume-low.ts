import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryVolumeLowIcon],svg[memory-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h4V7h1V6h1V5h1V4h1V3h1v16h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H6zm2 2v2h3v1h1v1h1V8h-1v1h-1v1z"></svg:path>`,
})
export class MemoryVolumeLowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

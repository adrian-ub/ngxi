import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryVolumeHighIcon],svg[memory-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h2v1h1v1h1v1h1v1h1v2h1v6h-1v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1h1v-1h1v-2h1V9h-1V7h-1V6h-1V5h-1V4h-1zm1 5v1h1v2h1v2h-1v2h-1v1h-1V7zM2 8h4V7h1V6h1V5h1V4h1V3h1v16h-1v-1H9v-1H8v-1H7v-1H6v-1H2zm2 2v2h3v1h1v1h1V8H8v1H7v1z"></svg:path>`,
})
export class MemoryVolumeHighIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

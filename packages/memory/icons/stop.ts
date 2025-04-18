import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryStopIcon],svg[memory-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5v1h1v10h-1v1H6v-1H5V6h1V5zM7 7v8h8V7z"></svg:path>`,
})
export class MemoryStopIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

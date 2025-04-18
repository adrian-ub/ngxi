import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryToyBrickIcon],svg[memory-toy-brick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h1V6H7m7 1h1V6h-1m5 12H3V7h2V5h1V4h3v1h1v2h2V5h1V4h3v1h1v2h2m-2 9V9H5v7Z"></svg:path>`,
})
export class MemoryToyBrickIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

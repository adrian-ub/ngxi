import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowTopLeftIcon],svg[memory-arrow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14V5h9v2H9v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7v5z"></svg:path>`,
})
export class MemoryArrowTopLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

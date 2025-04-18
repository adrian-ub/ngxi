import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpLeftIcon],svg[memory-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10V8h1V7h1V6h1V5h1V4h2v2H8v1H7v1h4v1h2v1h1v2h1v7h-2v-6h-1v-2h-2v-1H7v1h1v1h1v2H7v-1H6v-1H5v-1H4v-1"></svg:path>`,
})
export class MemoryArrowUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpRightIcon],svg[memory-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10V8h-1V7h-1V6h-1V5h-1V4h-2v2h1v1h1v1h-4v1H9v1H8v2H7v7h2v-6h1v-2h2v-1h3v1h-1v1h-1v2h2v-1h1v-1h1v-1h1v-1"></svg:path>`,
})
export class MemoryArrowUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

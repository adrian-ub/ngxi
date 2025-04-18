import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowLeftUpIcon],svg[memory-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H8v1H7v1H6v1H5v1H4v2h2V8h1V7h1v4h1v2h1v1h2v1h7v-2h-6v-1h-2v-2h-1V7h1v1h1v1h2V7h-1V6h-1V5h-1V4h-1"></svg:path>`,
})
export class MemoryArrowLeftUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowLeftRightIcon],svg[memory-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1H7v1h1v1h1v2H7v-1H6v-1H5v-1H4v-1H3v-2h1V9h1V8h1V7h1V6h2v2H8v1H7v1h8V9h-1V8h-1V6h2v1h1v1h1v1h1v1"></svg:path>`,
})
export class MemoryArrowLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

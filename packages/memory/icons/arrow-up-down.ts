import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpDownIcon],svg[memory-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h2v1h1v1h1v1h1v1h1v2h-2V8h-1V7h-1v8h1v-1h1v-1h2v2h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-2h2v1h1v1h1V7H9v1H8v1H6V7h1V6h1V5h1V4h1"></svg:path>`,
})
export class MemoryArrowUpDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

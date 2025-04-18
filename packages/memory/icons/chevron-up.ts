import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryChevronUpIcon],svg[memory-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H5v1H4v2h2v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1V9h-1V8h-1V7h-2v1H9v1H8v1H7v1H6"></svg:path>`,
})
export class MemoryChevronUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

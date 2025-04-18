import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryLanceIcon],svg[memory-lance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19H3v-2h1v-1h1v-1h1v-1H5v-1h1v-1h1v-1h2v-1h1V9h1V8h2V7h1V6h1V5h1V4h2V3h1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1H9v1H8v-1H7v1H6v1H5Z"></svg:path>`,
})
export class MemoryLanceIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

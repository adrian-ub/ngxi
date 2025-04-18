import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpBoldIcon],svg[memory-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v-2h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-5v8H7v-8zm4-2h3v8h4v-8h3V9h-1V8h-1V7h-1V6h-1V5h-2v1H9v1H8v1H7v1H6z"></svg:path>`,
})
export class MemoryArrowUpBoldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

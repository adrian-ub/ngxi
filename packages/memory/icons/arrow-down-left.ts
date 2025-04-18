import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownLeftIcon],svg[memory-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12v2h1v1h1v1h1v1h1v1h2v-2H8v-1H7v-1h4v-1h2v-1h1v-2h1V3h-2v6h-1v2h-2v1H7v-1h1v-1h1V8H7v1H6v1H5v1H4v1"></svg:path>`,
})
export class MemoryArrowDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatAlignRightIcon],svg[memory-format-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m0 5H8V7h10m0 5H4v-2h14m0 5H8v-2h10m0 5H4v-2h14Z"></svg:path>`,
})
export class MemoryFormatAlignRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

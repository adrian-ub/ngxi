import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatAlignJustifyIcon],svg[memory-format-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m0 5H4V7h14m0 5H4v-2h14m0 5H4v-2h14m0 5H4v-2h14Z"></svg:path>`,
})
export class MemoryFormatAlignJustifyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

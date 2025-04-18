import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatTextIcon],svg[memory-format-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6h-8V4h8m0 6h-8V8h8M7 14H5V6H3V4h6v2H7m12 8h-8v-2h8m0 6H3v-2h16Z"></svg:path>`,
})
export class MemoryFormatTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

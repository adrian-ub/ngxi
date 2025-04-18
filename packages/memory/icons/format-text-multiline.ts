import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatTextMultilineIcon],svg[memory-format-text-multiline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6H3V4h16m-6 6H3V8h10m0 6H3v-2h10m0 6H3v-2h10m5 2h-2v-1h-1v-1h-1v-1h2V8h2v7h2v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryFormatTextMultilineIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

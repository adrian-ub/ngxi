import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatItalicIcon],svg[memory-format-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19H4v-2h3v-1h1v-2h1v-2h1v-2h1V8h1V5h-2V3h8v2h-3v1h-1v2h-1v2h-1v2h-1v2h-1v3h2Z"></svg:path>`,
})
export class MemoryFormatItalicIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

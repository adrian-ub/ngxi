import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryHalberdIcon],svg[memory-halberd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18H3v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h-1V5h2v1h1V5h1V4h1V3h1v3h-1v1h-1v1h2V7h2v5h-1v1h-1v1h-4v-1h-1v-1h1v-1h1V9h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5Z"></svg:path>`,
})
export class MemoryHalberdIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

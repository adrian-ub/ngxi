import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memorySpearIcon],svg[memory-spear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19H4v-1H3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h-1V5h2V4h2V3h3v3h-1v2h-1v2h-2V9h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5Z"></svg:path>`,
})
export class MemorySpearIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

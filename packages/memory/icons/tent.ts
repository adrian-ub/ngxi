import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTentIcon],svg[memory-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H3v-2h7V8H9v2H8v2H7v2H6v2H3v-1h1v-2h1v-2h1v-1h1V8h1V6h1V4h1V3h2v1h1v2h1v2h1v2h1v1h1v2h1v2h1v1h-3v-2h-1v-2h-1v-2h-1V8h-1v9h7Z"></svg:path>`,
})
export class MemoryTentIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

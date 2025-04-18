import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryGlassesIcon],svg[memory-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16h-6v-1h-1v-1h-2v1H9v1H3v-1H2v-1H1V8h1V7h18v1h1v6h-1v1h-1M8 14v-1h1v-1h1V9H3v4h1v1m14 0v-1h1V9h-7v3h1v1h1v1Z"></svg:path>`,
})
export class MemoryGlassesIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

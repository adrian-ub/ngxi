import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWindIcon],svg[memory-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10H2V8h6V7h1V6H8V5H7v2H6V6H5V4h1V3h3v1h1v1h1v3h-1v1H9m6 4H2v-2h11v-1h3V9h1V8h-1V7h-2v2h-1V8h-1V6h1V5h4v1h1v1h1v3h-1v1h-1v1h-2m-1 9h-4v-1H9v-3h2v2h2v-2h-1v-1H4v-1H3v-1h10v1h1v1h1v1h1v2h-1v1h-1Z"></svg:path>`,
})
export class MemoryWindIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

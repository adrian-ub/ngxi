import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memorySwordIcon],svg[memory-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20H3v-1H2v-2h1v-1h1v-1h1v-1H4v-1H3v-2h2v1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h5v5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h1v2H9v-1H8v-1H7v1H6v1H5m5-6v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1Z"></svg:path>`,
})
export class MemorySwordIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

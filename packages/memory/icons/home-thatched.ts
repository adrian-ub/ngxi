import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryHomeThatchedIcon],svg[memory-home-thatched-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H3v-8H1V9h1V6h1V3h1V2h14v3h1v2h1v2h1v3h-1v1h-1m-3-3V9h2V8h-1V6h-1V4H6v2H5v2H4v1h2v1h3V9h4v1m-1 8v-3h-2v3m7 0v-7h-1v1h-4v-1h-2v1H6v-1H5v7h3v-5h6v5Z"></svg:path>`,
})
export class MemoryHomeThatchedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

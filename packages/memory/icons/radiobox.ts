import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryRadioboxIcon],svg[memory-radiobox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h6v1h2v1h1v1h1v1h1v2h1v6h-1v2h-1v1h-1v1h-1v1h-2v1H8v-1H6v-1H5v-1H4v-1H3v-2H2V8h1V6h1V5h1V4h1V3h2zm1 2v1H7v1H6v1H5v2H4v4h1v2h1v1h1v1h2v1h4v-1h2v-1h1v-1h1v-2h1V9h-1V7h-1V6h-1V5h-2V4z"></svg:path>`,
})
export class MemoryRadioboxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

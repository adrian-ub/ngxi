import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryNumberIcon],svg[memory-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14H4v-1H3v-1H2V4h1V3h1V2h5v1h1v1h1v8h-1v1H9m10 7h-6v-2h2v-6h-2v-2h1V9h1V8h2v10h2M8 12v-1h1V5H8V4H5v1H4v6h1v1Z"></svg:path>`,
})
export class MemoryNumberIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

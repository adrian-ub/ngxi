import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCalendarImportIcon],svg[memory-calendar-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-6v-2h5V9H4v8h5v2H3v-1H2V4h1V3h2V1h2v2h8V1h2v2h2v1h1v14h-1m-7 3h-2v-6H7v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h-3m6-8V5H4v2Z"></svg:path>`,
})
export class MemoryCalendarImportIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

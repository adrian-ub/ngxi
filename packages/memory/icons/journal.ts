import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryJournalIcon],svg[memory-journal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8H8V6h7m-1 7H9v-2h5m4 10H4v-1H3v-3H2v-3h1v-2H2v-2h1V8H2V5h1V2h1V1h14v1h1v18h-1m-1-1V3H5v2h1v3H5v2h1v2H5v2h1v3H5v2Z"></svg:path>`,
})
export class MemoryJournalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

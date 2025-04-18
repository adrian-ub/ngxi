import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryNoteNailedIcon],svg[memory-note-nailed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12H8v-2h6m0 6H8v-2h5v1h1m5 6h-4v-1h-1v1h-4v-1H8v1H6v-1H5v-2H4v-2H3v-5h1V6H3V4h7V3H9V2h4v1h-1v1h7v8h-1v3h1m-6 4v-1h4v-2h-1v-5h1V6h-5v2h-1v1h-1V6H6v6H5v3h1v2h1v1h4v1Z"></svg:path>`,
})
export class MemoryNoteNailedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

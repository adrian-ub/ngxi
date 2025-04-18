import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryNoteIcon],svg[memory-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v1h1v1h1v1h1v1h1v1h1v1h1v9h-1v1H2v-1H1V4h1V3zm0 3h-1v4h4V9h-1V8h-1V7h-1zM3 5v12h16v-5h-6v-1h-1V5z"></svg:path>`,
})
export class MemoryNoteIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

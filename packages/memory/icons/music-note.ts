import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMusicNoteIcon],svg[memory-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h7v5h-5v11h-1v1h-1v1H7v-1H6v-1H5v-4h1v-1h1v-1h4zm0 13h-1v-1H8v1H7v2h1v1h2v-1h1z"></svg:path>`,
})
export class MemoryMusicNoteIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

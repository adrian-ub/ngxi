import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMusicNoteIcon],svg[gg-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 8.954l5.635-1.127a2.942 2.942 0 0 0-1.154-5.769l-4.07.814A3 3 0 0 0 10 5.814v8.076a4 4 0 1 0 2 3.465zm4.874-4.935l-4.07.814a1 1 0 0 0-.804.98v1.102l5.243-1.049a.942.942 0 0 0-.37-1.847M10 17.354a2 2 0 1 0-4 0a2 2 0 0 0 4 0" clip-rule="evenodd"></svg:path>`,
})
export class GgMusicNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

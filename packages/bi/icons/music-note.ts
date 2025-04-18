import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biMusicNoteIcon],svg[bi-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2s2.5.895 2.5 2"></svg:path><svg:path fill-rule="evenodd" d="M9 3v10H8V3z"></svg:path><svg:path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"></svg:path></svg:g>`,
})
export class BiMusicNoteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

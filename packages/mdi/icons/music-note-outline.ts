import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteOutlineIcon],svg[mdi-music-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3m-8 16a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiMusicNoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

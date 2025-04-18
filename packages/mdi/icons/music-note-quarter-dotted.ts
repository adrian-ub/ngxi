import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteQuarterDottedIcon],svg[mdi-music-note-quarter-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13v.56a3.96 3.96 0 0 0-2-.56a4 4 0 1 0 4 4V3h-2m4.5 14a1.5 1.5 0 1 1-1.5 1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiMusicNoteQuarterDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

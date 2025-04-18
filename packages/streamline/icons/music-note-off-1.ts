import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMusicNoteOff1Icon],svg[streamline-music-note-off-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.25 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m2.5-6.75V.5a5.5 5.5 0 0 1 5.5 5.5M.5.5l13 13M6.75 11V9"></svg:path>`,
})
export class StreamlineMusicNoteOff1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

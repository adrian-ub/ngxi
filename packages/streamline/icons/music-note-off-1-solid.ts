import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMusicNoteOff1SolidIcon],svg[streamline-music-note-off-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.22 1.28A.75.75 0 0 1 1.28.22L5.4 4.339V1.185a1 1 0 0 1 1-1c.838 0 1.67.155 2.45.457c.778.303 1.49.749 2.091 1.314a6.1 6.1 0 0 1 1.414 1.987c.33.747.5 1.55.5 2.364a1 1 0 1 1-2 0a3.85 3.85 0 0 0-.33-1.557a4.1 4.1 0 0 0-.952-1.336a4.5 4.5 0 0 0-1.448-.908a5 5 0 0 0-.726-.216v4.049l6.381 6.38a.75.75 0 1 1-1.06 1.061zm4.002 6.24q.273 0 .532.045l2.565 2.565a3.142 3.142 0 1 1-3.097-2.61" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMusicNoteOff1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

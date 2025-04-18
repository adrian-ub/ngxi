import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMusicNote1SolidIcon],svg[streamline-music-note-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.445.126a1 1 0 0 0-1 1v6.59a3.195 3.195 0 1 0 2 2.934V2.23q.38.081.742.221c.55.215 1.047.527 1.462.917s.741.849.962 1.35c.221.5.334 1.034.334 1.572a1 1 0 1 0 2 0c0-.818-.172-1.627-.504-2.38a6.2 6.2 0 0 0-1.423-2A6.5 6.5 0 0 0 8.912.587a6.8 6.8 0 0 0-2.467-.46Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMusicNote1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

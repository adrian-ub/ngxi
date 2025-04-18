import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMusicNote1Icon],svg[streamline-music-note-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.25 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path d="M6.75 11V.5a5.5 5.5 0 0 1 5.5 5.5"></svg:path></svg:g>`,
})
export class StreamlineMusicNote1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMusicNoteIcon],svg[proicons-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.962 17.968V6.696a1.5 1.5 0 0 1 1.106-1.447l8.15-2.223a1.5 1.5 0 0 1 1.895 1.447v11.468M8.963 9.92l11.15-3.04M8.962 17.968a3.041 3.041 0 1 1-6.082 0a3.041 3.041 0 0 1 6.082 0"></svg:path><svg:path d="M20.113 15.94a3.041 3.041 0 1 1-6.082 0a3.041 3.041 0 0 1 6.082 0"></svg:path></svg:g>`,
})
export class ProiconsMusicNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

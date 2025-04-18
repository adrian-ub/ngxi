import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMusicNoteIcon],svg[majesticons-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M13 4h4v4h-4v9c0 1-.6 3-3 3s-3-2-3-3s.6-3 3-3s3 2 3 3z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17V8m0 9c0 1-.6 3-3 3s-3-2-3-3s.6-3 3-3s3 2 3 3m0-9V4h4v4z"></svg:path></svg:g>`,
})
export class MajesticonsMusicNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsOutlineMusicNoteIcon],svg[heroicons-outline-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2s1.343-2 3-2s3 .895 3 2m12-3c0 1.105-1.343 2-3 2s-3-.895-3-2s1.343-2 3-2s3 .895 3 2M9 10l12-3"></svg:path>`,
})
export class HeroiconsOutlineMusicNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

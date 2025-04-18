import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMusicNotePlusSolidIcon],svg[iconoir-music-note-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 10h3m3 0h-3m0 0V7m0 3v3"></svg:path><svg:path fill="currentColor" d="M5 21H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3V4l5-1v4L7 8v11a2 2 0 0 1-2 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zm0 0V8m0 0V4l5-1v4z"></svg:path></svg:g>`,
})
export class IconoirMusicNotePlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

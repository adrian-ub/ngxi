import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMusicNoteSolidIcon],svg[iconoir-music-note-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M10 21H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3V4l5-1v4l-5 1v11a2 2 0 0 1-2 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zm0 0V8m0 0V4l5-1v4z"></svg:path></svg:g>`,
})
export class IconoirMusicNoteSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

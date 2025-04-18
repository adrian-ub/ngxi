import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMusicDoubleNotePlusIcon],svg[iconoir-music-double-note-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 6.5h3m3 0h-3m0 0v-3m0 3v3M6 16V5l8-1m1 10v-4m-3 9h1a2 2 0 0 0 2-2v-3h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2m-9 2h1a2 2 0 0 0 2-2v-3H3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2"></svg:path>`,
})
export class IconoirMusicDoubleNotePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

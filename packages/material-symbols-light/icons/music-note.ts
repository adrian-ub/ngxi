import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMusicNoteIcon],svg[material-symbols-light-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.058 19.808q-1.238 0-2.119-.882t-.881-2.118t.881-2.119t2.119-.881q.575 0 1.091.204q.517.205.909.615V4.192h4.884v2.539h-3.884v10.077q0 1.237-.882 2.118t-2.118.882"></svg:path>`,
})
export class MaterialSymbolsLightMusicNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMusicNoteAddIcon],svg[material-symbols-light-music-note-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.116 19.808q-1.238 0-2.12-.882t-.88-2.118t.88-2.119t2.12-.881q.575 0 1.09.204t.91.615V4.192H19v2.539h-3.884v10.077q0 1.237-.882 2.118t-2.118.882M7.23 11.192v-3h-3v-1h3v-3h1v3h3v1h-3v3z"></svg:path>`,
})
export class MaterialSymbolsLightMusicNoteAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

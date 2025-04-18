import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biMusicNoteBeamedIcon],svg[bi-music-note-beamed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2s2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2s1.12-2 2.5-2s2.5.895 2.5 2"></svg:path><svg:path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"></svg:path><svg:path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"></svg:path></svg:g>`,
})
export class BiMusicNoteBeamedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

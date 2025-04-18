import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biMusicPlayerFillIcon],svg[bi-music-player-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 12a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path></svg:g>`,
})
export class BiMusicPlayerFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biMusicPlayerIcon],svg[bi-music-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1 0v3h6V3zm3 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M11 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class BiMusicPlayerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

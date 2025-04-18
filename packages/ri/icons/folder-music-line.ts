import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderMusicLineIcon],svg[ri-folder-music-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 8.05V9h5v2h-3v4.5a2.5 2.5 0 1 1-2-2.45"></svg:path>`,
})
export class RiFolderMusicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

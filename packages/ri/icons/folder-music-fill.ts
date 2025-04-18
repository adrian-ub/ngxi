import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderMusicFillIcon],svg[ri-folder-music-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 13.05a2.5 2.5 0 1 0 2 2.45V11h3V9h-5z"></svg:path>`,
})
export class RiFolderMusicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

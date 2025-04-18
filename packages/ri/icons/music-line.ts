import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMusicLineIcon],svg[ri-music-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.535V3h8v2h-6v12a4 4 0 1 1-2-3.465M10 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiMusicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMusicFillIcon],svg[ri-music-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465"></svg:path>`,
})
export class RiMusicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

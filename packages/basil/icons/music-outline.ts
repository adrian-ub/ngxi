import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilMusicOutlineIcon],svg[basil-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25a.75.75 0 0 0-.75.75v11.26a4.25 4.25 0 1 0 1.486 2.888A1 1 0 0 0 12.75 17V7.75H18a2.75 2.75 0 1 0 0-5.5zm.75 4H18a1.25 1.25 0 1 0 0-2.5h-5.25zm-4.25 8.5a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5" clip-rule="evenodd"></svg:path>`,
})
export class BasilMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

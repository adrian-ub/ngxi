import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMusicIcon],svg[picon-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5c-5 0-2 6 1 1V2h2L6 0H5"></svg:path>`,
})
export class PiconMusicIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

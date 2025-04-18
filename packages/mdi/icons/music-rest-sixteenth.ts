import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicRestSixteenthIcon],svg[mdi-music-rest-sixteenth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a5.56 5.56 0 0 1-3.05 1.86A1.5 1.5 0 1 0 10.5 6h.24a6.3 6.3 0 0 0 3.51-1.07L12.9 9.1a5.56 5.56 0 0 1-2.95 1.76A1.5 1.5 0 1 0 8.5 12h.24a6.3 6.3 0 0 0 3.51-1.07L9 21h2l6-18Z"></svg:path>`,
})
export class MdiMusicRestSixteenthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

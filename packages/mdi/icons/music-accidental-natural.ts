import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicAccidentalNaturalIcon],svg[mdi-music-accidental-natural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8.75V3.5H8v14l6-2.25v5.25h2v-14zm4 4.5l-4 1.5v-4l4-1.5z"></svg:path>`,
})
export class MdiMusicAccidentalNaturalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

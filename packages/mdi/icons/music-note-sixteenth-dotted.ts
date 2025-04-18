import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicNoteSixteenthDottedIcon],svg[mdi-music-note-sixteenth-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5a1.5 1.5 0 1 1-1.5-1.5a1.5 1.5 0 0 1 1.5 1.5M18 7V3h-6v10.55A4 4 0 1 0 14 17v-6h4V8h-4V7Z"></svg:path>`,
})
export class MdiMusicNoteSixteenthDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

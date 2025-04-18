import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesSimpleThinIcon],svg[ph-music-notes-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.46 20.85a4 4 0 0 0-3.43-.73l-128 32A4 4 0 0 0 76 56v118.87A32 32 0 1 0 84 196V59.12l120-30v113.75a32 32 0 1 0 8 21.13V24a4 4 0 0 0-1.54-3.15M52 220a24 24 0 1 1 24-24a24 24 0 0 1-24 24m128-32a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhMusicNotesSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

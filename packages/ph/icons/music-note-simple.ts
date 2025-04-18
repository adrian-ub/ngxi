import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteSimpleIcon],svg[ph-music-note-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V50.75l69.7 20.91a8 8 0 1 0 4.6-15.32M88 216a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhMusicNoteSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteThinIcon],svg[ph-music-note-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.15 60.17l-80-24A4 4 0 0 0 124 40v118.75a44 44 0 1 0 8 25.25V93.38l74.85 22.45A4 4 0 0 0 212 112V64a4 4 0 0 0-2.85-3.83M88 220a36 36 0 1 1 36-36a36 36 0 0 1-36 36m116-113.38L132 85V45.38L204 67Z"></svg:path>`,
})
export class PhMusicNoteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

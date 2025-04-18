import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesMinusBoldIcon],svg[ph-music-notes-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 48a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12m-16 40v76a40 40 0 1 1-24-36.65V88a12 12 0 0 1 24 0m-24 76a16 16 0 1 0-16 16a16 16 0 0 0 16-16M92 113.37V196a40 40 0 1 1-24-36.65V56a12 12 0 0 1 9.09-11.64l56-14a12 12 0 0 1 5.82 23.28L92 65.37v23.26l65.09-16.27a12 12 0 0 1 5.82 23.28ZM68 196a16 16 0 1 0-16 16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhMusicNotesMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

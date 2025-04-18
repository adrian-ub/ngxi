import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesSimpleBoldIcon],svg[ph-music-notes-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.38 14.54a12 12 0 0 0-10.29-2.18l-128 32A12 12 0 0 0 68 56v103.35A40 40 0 1 0 92 196V65.37l104-26v88A40 40 0 1 0 220 164V24a12 12 0 0 0-4.62-9.46M52 212a16 16 0 1 1 16-16a16 16 0 0 1-16 16m128-32a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhMusicNotesSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

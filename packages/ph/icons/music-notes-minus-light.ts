import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesMinusLightIcon],svg[ph-music-notes-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-16 40v76a34.06 34.06 0 1 1-12-25.89V88a6 6 0 0 1 12 0m-12 76a22 22 0 1 0-22 22a22 22 0 0 0 22-22M86 108.69V196a34.06 34.06 0 1 1-12-25.89V56a6 6 0 0 1 4.54-5.82l56-14a6 6 0 1 1 2.92 11.64L86 60.68v35.63l72.54-18.13a6 6 0 1 1 2.92 11.64ZM74 196a22 22 0 1 0-22 22a22 22 0 0 0 22-22"></svg:path>`,
})
export class PhMusicNotesMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

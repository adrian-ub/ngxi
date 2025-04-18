import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityMusicNoteSolidIcon],svg[clarity-music-note-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.68 6.16c-1.92-3.3-10.6-4-11.58-4.09L19 2v20.29a6 6 0 0 0-.81-.55a8.33 8.33 0 0 0-6.53-.41c-4.12 1.33-6.77 5.13-5.91 8.47a5.33 5.33 0 0 0 2.66 3.32a7.5 7.5 0 0 0 3.61.88a9.5 9.5 0 0 0 2.98-.48c3.7-1.19 6.2-4.37 6.06-7.42V8.49c1 .12 2.37.33 3.82.64a11.2 11.2 0 0 1 4.06 1.46c1 .66.38 1.9.33 2a11.8 11.8 0 0 1-1.66 2a1 1 0 0 0 1.33 1.49c.21-.23 5.56-5.08 2.74-9.92" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityMusicNoteSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

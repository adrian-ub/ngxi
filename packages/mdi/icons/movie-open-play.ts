import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenPlayIcon],svg[mdi-movie-open-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 7.46L12 3.93l1.97-.39l2.74 3.53zm6.87-1.36l-.78-3.92l-3.93.78l2.74 3.54zM4.16 5.5l-.98.19a2.01 2.01 0 0 0-1.57 2.35L2 10l4.9-.97zm7.65 2.55L9.07 4.5l-1.97.41l2.75 3.53zM2 10v10a2 2 0 0 0 2 2h9.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V10zm15 12l5-3l-5-3z"></svg:path>`,
})
export class MdiMovieOpenPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

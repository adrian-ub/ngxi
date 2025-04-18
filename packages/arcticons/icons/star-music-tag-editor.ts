import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStarMusicTagEditorIcon],svg[arcticons-star-music-tag-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.921 14.944L20.077 33.05M13.25 5.378a4 4 0 0 0-2 3.463v30.312a4 4 0 0 0 6 3.463L43.5 27.462a4 4 0 0 0 0-6.93L17.25 5.378a4 4 0 0 0-4 0m-2 11.258L4.5 20.532c-2.668 1.54-2.668 5.39 0 6.93l6.75 3.896"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 38.72l6.75 3.896c2.666 1.539 5.998-.384 6-3.463v-7.795m0-14.722V8.841a4 4 0 0 0-6-3.463L24 9.275m7.697 9.063l9.802 5.66l-9.802 5.659M16.301 18.338L6.5 23.998l9.802 5.659"></svg:path>`,
})
export class ArcticonsStarMusicTagEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCinemarkTheatresIcon],svg[arcticons-cinemark-theatres-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 37.6H23.812c-7.642 0-13.837-6.196-13.837-13.838S16.17 9.926 23.812 9.926c3.128 0 6.013 1.038 8.33 2.789l-3.69 7.124a6.077 6.077 0 1 0-4.64 10H42.5"></svg:path>`,
})
export class ArcticonsCinemarkTheatresIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

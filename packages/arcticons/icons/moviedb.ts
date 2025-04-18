import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoviedbIcon],svg[arcticons-moviedb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.07 23.55h18.34a2.46 2.46 0 0 0 2.47-2.47V17a2.47 2.47 0 0 0-2.47-2.48h-22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.07 23.55l-8.07 6v.58a2.47 2.47 0 0 0 2.48 2.47h23.93a2.46 2.46 0 0 0 2.47-2.47V26a2.47 2.47 0 0 0-2.47-2.48Z"></svg:path><svg:rect width="28.88" height="9.01" x="13" y="32.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.2 26.32c0-4.48 0-10.81-.07-14a54 54 0 0 1 0-5.84l9.61 7l9.58 7s-16.84 12.38-19 13.93c-.09.06-.09-.42-.12-8.09"></svg:path>`,
})
export class ArcticonsMoviedbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

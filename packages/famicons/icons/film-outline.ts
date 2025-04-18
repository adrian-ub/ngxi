import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFilmOutlineIcon],svg[famicons-film-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="320" x="48" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="336" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="256" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="176" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="384" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="336" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="256" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="176" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="80" height="80" x="48" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="256" height="160" x="128" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect><svg:rect width="256" height="160" x="128" y="256" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="28" ry="28"></svg:rect>`,
})
export class FamiconsFilmOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaShuffleOutlineIcon],svg[eva-shuffle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9.31a1 1 0 0 0 1 1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4.3a1 1 0 0 0-1 1a1 1 0 0 0 1 1h1.89L12 10.59L6.16 4.76a1 1 0 0 0-1.41 1.41L10.58 12l-6.29 6.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L18 7.42Z"></svg:path><svg:path fill="currentColor" d="M19 13.68a1 1 0 0 0-1 1v1.91l-2.78-2.79a1 1 0 0 0-1.42 1.42L16.57 18h-1.88a1 1 0 0 0 0 2H19a1 1 0 0 0 1-1.11v-4.21a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaShuffleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

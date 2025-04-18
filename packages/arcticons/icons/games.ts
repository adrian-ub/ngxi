import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGamesIcon],svg[arcticons-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="20" x="4.5" y="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.66 22.43h-1.29v-1.29a1.57 1.57 0 1 0-3.14 0v1.29h-1.29a1.57 1.57 0 1 0 0 3.14h1.29v1.29a1.57 1.57 0 0 0 3.14 0v-1.29h1.29a1.57 1.57 0 0 0 0-3.14"></svg:path><svg:rect width="4.82" height="4.82" x="27.79" y="24.23" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.41"></svg:rect><svg:rect width="4.82" height="4.82" x="33.07" y="18.95" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.41"></svg:rect>`,
})
export class ArcticonsGamesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

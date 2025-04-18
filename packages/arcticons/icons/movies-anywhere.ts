import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoviesAnywhereIcon],svg[arcticons-movies-anywhere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.073 25.33l-6.81 14.014c-.37.765-.675.698-.683-.15c-.093-9.825-.577-19.695 2.642-29.14a.859.859 0 0 1 1.575-.312c6.443 7.57 8.658 22.178 13.197 24.838a3.97 3.97 0 0 0 2.995.087c5.395-2.46 7.757-17.84 13.76-25.1a.839.839 0 0 1 1.55.312c3.467 10.383 3.485 19.92 2.937 29.317c-.05.846-.407.917-.794.16L35.281 25.33"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.1 18.999s4.16-8.46 7.774-10.537a3.96 3.96 0 0 1 2.98-.1c4.104 1.862 8.13 10.38 8.13 10.38"></svg:path>`,
})
export class ArcticonsMoviesAnywhereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

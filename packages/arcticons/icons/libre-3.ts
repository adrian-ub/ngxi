import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibre3Icon],svg[arcticons-libre-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.432 43.326a21.486 21.486 0 1 1 9.894-9.893"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 12.75a3.5 3.5 0 0 1 7 0v6.5a3.5 3.5 0 0 1-7 0ZM39.15 38.5a2 2 0 0 0 2-2h0a2 2 0 0 0-2-1.999m0 7.999a2 2 0 0 0 2-2h0a2 2 0 0 0-2-2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.85 41.825a3.4 3.4 0 0 0 2.489.675h.812m-3.301-7.332a3.4 3.4 0 0 1 2.49-.668l.811.002m-2.037 3.999h2.037"></svg:path><svg:circle cx="38.5" cy="38.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLibre3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

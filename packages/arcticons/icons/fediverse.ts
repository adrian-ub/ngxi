import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFediverseIcon],svg[arcticons-fediverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.85V5.529m8.366 14.491l-16.733-9.661m0 9.661l16.733-9.661m1.768 32.112V23.15M42.5 37.641L25.768 27.98m0 9.661L42.5 27.98M13.866 42.471V23.15m8.366 14.491L5.5 27.98m0 9.661l16.732-9.661"></svg:path>`,
})
export class ArcticonsFediverseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

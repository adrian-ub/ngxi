import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNomadIcon],svg[arcticons-nomad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 38.92V8.415l37 30.505V8.415M17.815 5.642V15M30.15 32v10.358M17.695 22.5v19.858M30.137 5.642V25"></svg:path>`,
})
export class ArcticonsNomadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

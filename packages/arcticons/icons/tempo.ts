import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTempoIcon],svg[arcticons-tempo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.88l.028 7.616M43.08 12.88l.029 7.616M39.25 7.264v19.07M8.334 7.264v19.07m27.024-16.262v13.343M12.205 10.072v13.343m19.303-10.508v10.036M16.077 12.907v10.036m11.65-12.76v25.909m-7.778-25.909v25.909M23.82 7.208v35.584"></svg:path>`,
})
export class ArcticonsTempoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNightmodeIcon],svg[arcticons-nightmode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.75 6.479A18.5 18.5 0 1 1 6.479 31.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.02 6.75A18.5 18.5 0 0 1 6.75 32.02M10 8v4m-2-2h4m0 8v3m-1.5-1.5h3m17-5.5v3M29 15.5h3m6.5-10v3M37 7h3M7.5 41h3M9 39.5v3M39.5 36h3M41 34.5l.02 3"></svg:path>`,
})
export class ArcticonsNightmodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

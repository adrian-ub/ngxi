import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGpsstatusIcon],svg[arcticons-gpsstatus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.8 25.51a1.78 1.78 0 1 1 0 2.52a1.78 1.78 0 0 1 0-2.52M10.56 37a9.52 9.52 0 0 1 .12-13.44a1.47 1.47 0 0 1 2.08.09l.12.14l11.35 10.93a1.71 1.71 0 0 1 0 2.42a9.58 9.58 0 0 1-13.55 0a1 1 0 0 1-.14-.14Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.85 43.6a26 26 0 0 0 .2-3.19A25.46 25.46 0 0 0 7.59 15a26 26 0 0 0-3.19.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.89 37.3c.07-.81.11-1.62.11-2.45A27.85 27.85 0 0 0 13.15 7c-.83 0-1.64 0-2.45.11"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGpsstatusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOitrackIcon],svg[arcticons-oitrack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.53 18.114l15.952-7.216a1 1 0 0 1 1.323.5l2.266 5.01a1 1 0 0 1-.499 1.323l-2.909 1.315a1 1 0 0 0-.499 1.324l4.52 9.993a1 1 0 0 1-.498 1.323l-5.58 2.524a1 1 0 0 1-1.323-.499l-4.52-9.993a1 1 0 0 0-1.323-.5l-3.82 1.729M17.039 35.13a4.58 4.58 0 0 0-4.128-4.15l-.012.012m.736 3.387a1.836 1.836 0 1 0 0 2.597q0 0 0 0h0a1.836 1.836 0 0 0 0-2.597m7.624.481a9.006 9.006 0 0 0-8.105-8.105"></svg:path>`,
})
export class ArcticonsOitrackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

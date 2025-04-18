import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGlipIcon],svg[arcticons-glip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24m43 0c0-11.874-9.626-21.5-21.5-21.5S2.5 12.126 2.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 24c0-8.008-6.492-14.5-14.5-14.5S9.5 15.992 9.5 24m29 0c0 8.008-6.492 14.5-14.5 14.5S9.5 32.008 9.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35 24c0-6.075-4.925-11-11-11s-11 4.925-11 11m22 0c0 6.075-4.925 11-11 11s-11-4.925-11-11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.5 24a7.5 7.5 0 1 0-15 0m15 0a7.5 7.5 0 1 1-15 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28 24a4 4 0 1 0-8 0m8 0a4 4 0 1 1-8 0"></svg:path>`,
})
export class ArcticonsGlipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
